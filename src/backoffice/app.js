import { db } from './config.js';
import { 
    collection, 
    query, 
    where, 
    getDocs, 
    addDoc, 
    orderBy, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

// DOM Elements
const efectivoInput = document.getElementById('efectivo');
const tarjetaInput = document.getElementById('tarjeta');
const guardarBtn = document.getElementById('guardar');
const efectivoTotal = document.getElementById('efectivo-total');
const tarjetaTotal = document.getElementById('tarjeta-total');
const totalGeneral = document.getElementById('total-general');
const monthSelect = document.getElementById('month-select');
const yearSelect = document.getElementById('year-select');
const monthlyData = document.getElementById('monthly-data');

// Initialize year select
const currentYear = new Date().getFullYear();
for (let year = currentYear - 2; year <= currentYear + 2; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    if (year === currentYear) {
        option.selected = true;
    }
    yearSelect.appendChild(option);
}

// Update totals
async function updateTotals() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const q = query(
        collection(db, 'daily_totals'),
        where('date', '>=', today)
    );
    
    const snapshot = await getDocs(q);

    let efectivoSum = 0;
    let tarjetaSum = 0;

    snapshot.forEach(doc => {
        const data = doc.data();
        efectivoSum += data.efectivo || 0;
        tarjetaSum += data.tarjeta || 0;
    });

    const totalSum = efectivoSum + tarjetaSum;

    efectivoTotal.textContent = efectivoSum.toFixed(2) + '€';
    tarjetaTotal.textContent = tarjetaSum.toFixed(2) + '€';
    totalGeneral.textContent = totalSum.toFixed(2) + '€';
}

// Save daily totals
guardarBtn.addEventListener('click', async () => {
    const efectivo = parseFloat(efectivoInput.value) || 0;
    const tarjeta = parseFloat(tarjetaInput.value) || 0;
    const now = new Date();

    try {
        await addDoc(collection(db, 'daily_totals'), {
            efectivo,
            tarjeta,
            total: efectivo + tarjeta,
            date: now,
            timestamp: serverTimestamp()
        });

        efectivoInput.value = '';
        tarjetaInput.value = '';
        updateTotals();
        alert('Datos guardados correctamente');
    } catch (error) {
        console.error('Error al guardar:', error);
        alert('Error al guardar los datos');
    }
});

// Automatic daily backup at 20:00
function scheduleBackup() {
    const now = new Date();
    const backupTime = new Date(now);
    backupTime.setHours(20, 0, 0, 0);

    if (now > backupTime) {
        backupTime.setDate(backupTime.getDate() + 1);
    }

    const timeUntilBackup = backupTime - now;
    setTimeout(async () => {
        await createDailyBackup();
        scheduleBackup(); // Schedule next backup
    }, timeUntilBackup);
}

// Create daily backup
async function createDailyBackup() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const q = query(
        collection(db, 'daily_totals'),
        where('date', '>=', today)
    );
    
    const snapshot = await getDocs(q);

    let efectivoSum = 0;
    let tarjetaSum = 0;

    snapshot.forEach(doc => {
        const data = doc.data();
        efectivoSum += data.efectivo || 0;
        tarjetaSum += data.tarjeta || 0;
    });

    try {
        await addDoc(collection(db, 'daily_backups'), {
            date: today,
            efectivo_acumulado: efectivoSum,
            tarjeta_acumulada: tarjetaSum,
            total_general: efectivoSum + tarjetaSum,
            timestamp: serverTimestamp()
        });
        console.log('Backup diario creado correctamente');
    } catch (error) {
        console.error('Error al crear el backup:', error);
    }
}

// Update monthly view
async function updateMonthlyView() {
    const selectedYear = parseInt(yearSelect.value);
    const selectedMonth = parseInt(monthSelect.value);
    
    const startDate = new Date(selectedYear, selectedMonth, 1);
    const endDate = new Date(selectedYear, selectedMonth + 1, 0);

    try {
        const q = query(
            collection(db, 'daily_backups'),
            where('date', '>=', startDate),
            where('date', '<=', endDate),
            orderBy('date')
        );
        
        const snapshot = await getDocs(q);

        let html = '<table class="monthly-table">';
        html += '<tr><th>Fecha</th><th>Efectivo</th><th>Tarjeta</th><th>Total</th></tr>';

        snapshot.forEach(doc => {
            const data = doc.data();
            const date = data.date.toDate();
            html += `
                <tr>
                    <td>${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</td>
                    <td>${data.efectivo_acumulado.toFixed(2)}€</td>
                    <td>${data.tarjeta_acumulada.toFixed(2)}€</td>
                    <td>${data.total_general.toFixed(2)}€</td>
                </tr>
            `;
        });

        html += '</table>';
        monthlyData.innerHTML = html;
    } catch (error) {
        console.error('Error al cargar datos mensuales:', error);
        monthlyData.innerHTML = '<p>Error al cargar los datos</p>';
    }
}

// Event listeners
monthSelect.addEventListener('change', updateMonthlyView);
yearSelect.addEventListener('change', updateMonthlyView);

// Initialize
updateTotals();
updateMonthlyView();
scheduleBackup();

// Add some styles for the monthly table
const style = document.createElement('style');
style.textContent = `
    .monthly-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;
    }
    .monthly-table th, .monthly-table td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: right;
    }
    .monthly-table th {
        background-color: #2c3e50;
        color: white;
        text-align: center;
    }
    .monthly-table tr:nth-child(even) {
        background-color: #f8f9fa;
    }
    @media (max-width: 480px) {
        .monthly-table {
            font-size: 0.9rem;
        }
        .monthly-table th, .monthly-table td {
            padding: 4px;
        }
    }
`;
document.head.appendChild(style); 