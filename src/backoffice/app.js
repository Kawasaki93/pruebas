// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Verificar que Firebase y Firestore estén disponibles
        if (typeof firebase === 'undefined') {
            throw new Error('Firebase no está disponible');
        }
        if (typeof firebase.firestore !== 'function') {
            throw new Error('Firestore no está disponible');
        }

        // Get Firestore instance from window.db (initialized in config.js)
        const db = window.db;
        if (!db) {
            throw new Error('La base de datos no está inicializada correctamente');
        }

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
        const fechaRegistro = document.getElementById('fecha-registro');
        const fechaTotales = document.getElementById('fecha-totales');

        // Initialize date inputs with today's date
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];
        fechaRegistro.value = todayStr;
        fechaTotales.value = todayStr;

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

        // Update totals for specific date
        async function updateTotals(date) {
            console.log('Actualizando totales para:', date);
            const startDate = new Date(date);
            startDate.setHours(0, 0, 0, 0);
            
            const endDate = new Date(date);
            endDate.setHours(23, 59, 59, 999);
            
            try {
                const snapshot = await db.collection('daily_totals')
                    .where('date', '>=', startDate)
                    .where('date', '<=', endDate)
                    .get();

                let efectivoSum = 0;
                let tarjetaSum = 0;

                snapshot.forEach(doc => {
                    const data = doc.data();
                    efectivoSum += parseFloat(data.efectivo) || 0;
                    tarjetaSum += parseFloat(data.tarjeta) || 0;
                });

                const totalSum = efectivoSum + tarjetaSum;

                efectivoTotal.textContent = efectivoSum.toFixed(2) + '€';
                tarjetaTotal.textContent = tarjetaSum.toFixed(2) + '€';
                totalGeneral.textContent = totalSum.toFixed(2) + '€';
                
                console.log('Totales actualizados:', { efectivoSum, tarjetaSum, totalSum });
            } catch (error) {
                console.error('Error al obtener totales:', error);
                alert('Error al cargar los totales: ' + error.message);
            }
        }

        // Save daily totals
        guardarBtn.addEventListener('click', async () => {
            console.log('Botón guardar clickeado');
            console.log('Estado de Firebase:', typeof firebase !== 'undefined');
            console.log('Estado de Firestore:', typeof firebase?.firestore === 'function');
            
            try {
                // Validar inputs
                if (!efectivoInput.value && !tarjetaInput.value) {
                    console.log('Validación fallida: No hay valores ingresados');
                    alert('Por favor, ingrese al menos un valor');
                    return;
                }

                const efectivo = parseFloat(efectivoInput.value) || 0;
                const tarjeta = parseFloat(tarjetaInput.value) || 0;
                const selectedDate = new Date(fechaRegistro.value);
                
                // Set the time to noon to avoid timezone issues
                selectedDate.setHours(12, 0, 0, 0);

                console.log('Valores a guardar:', { 
                    efectivo, 
                    tarjeta, 
                    date: selectedDate,
                    efectivoRaw: efectivoInput.value,
                    tarjetaRaw: tarjetaInput.value,
                    fechaRaw: fechaRegistro.value
                });

                // Verificar que db esté disponible
                if (!db) {
                    throw new Error('Firestore no está inicializado correctamente');
                }

                const docRef = await db.collection('daily_totals').add({
                    efectivo: efectivo,
                    tarjeta: tarjeta,
                    total: efectivo + tarjeta,
                    date: selectedDate,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });

                console.log('Documento guardado con ID:', docRef.id);

                // Limpiar inputs y actualizar totales
                efectivoInput.value = '';
                tarjetaInput.value = '';
                await updateTotals(selectedDate.toISOString().split('T')[0]);
                
                alert('Datos guardados correctamente');
            } catch (error) {
                console.error('Error detallado al guardar:', error);
                console.error('Stack trace:', error.stack);
                alert('Error al guardar los datos: ' + error.message);
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
            
            try {
                const snapshot = await db.collection('daily_totals')
                    .where('date', '>=', today)
                    .get();

                let efectivoSum = 0;
                let tarjetaSum = 0;

                snapshot.forEach(doc => {
                    const data = doc.data();
                    efectivoSum += data.efectivo || 0;
                    tarjetaSum += data.tarjeta || 0;
                });

                await db.collection('daily_backups').add({
                    date: today,
                    efectivo_acumulado: efectivoSum,
                    tarjeta_acumulada: tarjetaSum,
                    total_general: efectivoSum + tarjetaSum,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
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
                const snapshot = await db.collection('daily_totals')
                    .where('date', '>=', startDate)
                    .where('date', '<=', endDate)
                    .orderBy('date')
                    .get();

                let html = '<table class="monthly-table">';
                html += '<tr><th>Fecha</th><th>Efectivo</th><th>Tarjeta</th><th>Total</th></tr>';

                const dailyTotals = {};
                
                // Agrupar por día
                snapshot.forEach(doc => {
                    const data = doc.data();
                    const date = data.date.toDate();
                    const dateStr = date.toISOString().split('T')[0];
                    
                    if (!dailyTotals[dateStr]) {
                        dailyTotals[dateStr] = {
                            efectivo: 0,
                            tarjeta: 0,
                            total: 0
                        };
                    }
                    
                    dailyTotals[dateStr].efectivo += parseFloat(data.efectivo) || 0;
                    dailyTotals[dateStr].tarjeta += parseFloat(data.tarjeta) || 0;
                    dailyTotals[dateStr].total += parseFloat(data.total) || 0;
                });

                // Ordenar por fecha y generar tabla
                Object.entries(dailyTotals)
                    .sort(([a], [b]) => a.localeCompare(b))
                    .forEach(([dateStr, totals]) => {
                        const date = new Date(dateStr);
                        html += `
                            <tr>
                                <td>${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</td>
                                <td>${totals.efectivo.toFixed(2)}€</td>
                                <td>${totals.tarjeta.toFixed(2)}€</td>
                                <td>${totals.total.toFixed(2)}€</td>
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
        fechaTotales.addEventListener('change', (e) => updateTotals(e.target.value));

        // Initialize
        updateTotals(todayStr);
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
    } catch (error) {
        console.error('Error al inicializar la aplicación:', error);
        alert('Error al inicializar la aplicación: ' + error.message);
    }
}); 