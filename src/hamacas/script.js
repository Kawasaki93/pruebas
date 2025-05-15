if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const swPath = './sw.js'; // Ruta relativa al Service Worker
      const registration = await navigator.serviceWorker.register(swPath, {
        scope: './' // Scope relativo
      });
      console.log("Service Worker registrado correctamente en:", registration.scope);
    } catch (err) {
      console.error("Error al registrar el Service Worker:", err);
    }
  });
}

for (var x = 1; x < 126; x++) {
  let cloned_element = $(".sunbed").first().clone();
  cloned_element.attr("id", "clon_" + x);

  // Clonar los círculos también
  const circles = cloned_element.find('.circle');
  circles.each(function(index) {
    $(this).attr('id', 'circle_' + x + '_' + (index + 1));
  });

  if (x === 10) {
    cloned_element.find(".sunbed_name").html(82); // Asigna 85 al clon número 10
} else if (x === 9) {
    cloned_element.find(".sunbed_name").html(83); // Asigna 84 al clon número 9
} else if (x === 8) {
    cloned_element.find(".sunbed_name").html(82); // Asigna 83 al clon número 8
} else if (x === 11) {
    cloned_element.find(".sunbed_name").html(81); // Asigna 82 al clon número 11
} else if (x === 12) {
    cloned_element.find(".sunbed_name").html(80); // Asigna 81 al clon número 12
} else if (x === 19) {
    cloned_element.find(".sunbed_name").html(77); // Asigna 80 al clon número 13
} else if (x === 14) {
    cloned_element.find(".sunbed_name").html(79); // Asigna 79 al clon número 14
} else if (x === 20) {
    cloned_element.find(".sunbed_name").html(76); // Asigna 78 al clon número 20
} else if (x === 16 || x === 17 || x === 18) {
    cloned_element.find(".sunbed_name").html("M"); // Cambia el contenido de los clones 17, 18 y 19 a "X"
} else if (x === 21) {
    cloned_element.find(".sunbed_name").html(75); // Asigna 77 al clon número 21
} else if (x === 22) {
    cloned_element.find(".sunbed_name").html(74); // Asigna 76 al clon número 22
} else if (x === 23) {
    cloned_element.find(".sunbed_name").html(73); // Asigna 75 al clon número 23
} else if (x === 24) {
    cloned_element.find(".sunbed_name").html(72); // Asigna 73 al clon número 24
} else if (x === 25) {
    cloned_element.find(".sunbed_name").html(71); // Asigna 72 al clon número 25
} else if (x === 26) {
    cloned_element.find(".sunbed_name").html(70); // Asigna 71 al clon número 26
} else if (x === 27) {
    cloned_element.find(".sunbed_name").html(70); // Asigna 70 al clon número 27
} else if (x === 28) {
    cloned_element.find(".sunbed_name").html("69C"); // Asigna 69C al clon número 28
} else if (x === 29) {
    cloned_element.find(".sunbed_name").html("69B"); // Asigna 69B al clon número 29
} else if (x === 30) {
    cloned_element.find(".sunbed_name").html("69A"); // Asigna 69A al clon número 30
} else if (x === 31) {
    cloned_element.find(".sunbed_name").html(69); // Asigna 69 al clon número 31
} else if (x === 32) {
    cloned_element.find(".sunbed_name").html(68); // Asigna 68 al clon número 32
} else if (x === 33) {
    cloned_element.find(".sunbed_name").html(67); // Asigna 67 al clon número 33
} else if (x === 34) {
    cloned_element.find(".sunbed_name").html(66); // Asigna 66 al clon número 34
} else if (x === 35) {
    cloned_element.find(".sunbed_name").html(65); // Asigna 65 al clon número 35
} else if (x === 36) {
    cloned_element.find(".sunbed_name").html(64); // Asigna 64 al clon número 36
} else if (x === 37) {
    cloned_element.find(".sunbed_name").html(63); // Asigna 63 al clon número 37
} else if (x === 38) {
    cloned_element.find(".sunbed_name").html(62); // Asigna 62 al clon número 38
} else if (x === 39) {
    cloned_element.find(".sunbed_name").html(61); // Asigna 62 al clon número 38
} else if (x === 40) {
    cloned_element.find(".sunbed_name").html(60); // Asigna 62 al clon número 38
} else if (x === 42) {
    cloned_element.find(".sunbed_name").html("59C"); // Asigna 59C al clon número 39
} else if (x === 43) {
    cloned_element.find(".sunbed_name").html("59B"); // Asigna 59B al clon número 40
} else if (x === 44) {
    cloned_element.find(".sunbed_name").html("59A"); // Asigna 59A al clon número 41
}  else if (x === 45) {
    cloned_element.find(".sunbed_name").html(59); // Asigna 59 al clon número 45
} else if (x === 46) {
    cloned_element.find(".sunbed_name").html(58); // Asigna 58 al clon número 46
} else if (x === 47) {
    cloned_element.find(".sunbed_name").html(57); // Asigna 57 al clon número 47
} else if (x === 48) {
    cloned_element.find(".sunbed_name").html(56); // Asigna 56 al clon número 48
}  else if (x === 49) {
    cloned_element.find(".sunbed_name").html(55); // Asigna 55 al clon número 49
} else if (x === 50) {
    cloned_element.find(".sunbed_name").html(54); // Asigna 54 al clon número 50
} else if (x === 51) {
    cloned_element.find(".sunbed_name").html(53); // Asigna 53 al clon número 51
} else if (x === 52) {
    cloned_element.find(".sunbed_name").html(52); // Asigna 52 al clon número 52
} else if (x === 53) {
    cloned_element.find(".sunbed_name").html(51); // Asigna 51 al clon número 53
} else if (x === 54) {
    cloned_element.find(".sunbed_name").html(50); // Asigna 50 al clon número 54
} else if (x === 56) {
    cloned_element.find(".sunbed_name").html("49C");
} else if (x === 57) {
    cloned_element.find(".sunbed_name").html("49B");
} else if (x === 58) {
    cloned_element.find(".sunbed_name").html("49A");
} else if (x === 59) {
    cloned_element.find(".sunbed_name").html(49);
}  else if (x === 60) {
    cloned_element.find(".sunbed_name").html(48);
} else if (x === 61) {
    cloned_element.find(".sunbed_name").html(47);
} else if (x === 62) {
    cloned_element.find(".sunbed_name").html(46);
} else if (x === 63) {
    cloned_element.find(".sunbed_name").html(45);
}else if (x === 64) {
    cloned_element.find(".sunbed_name").html(44);
} else if (x === 65) {
    cloned_element.find(".sunbed_name").html(43);
} else if (x === 66) {
    cloned_element.find(".sunbed_name").html(42);
} else if (x === 67) {
    cloned_element.find(".sunbed_name").html(41);
} else if (x === 68) {
    cloned_element.find(".sunbed_name").html(40);
} else if (x === 70) {
    cloned_element.find(".sunbed_name").html("39C");
} else if (x === 71) {
    cloned_element.find(".sunbed_name").html("39B");
} else if (x === 72) {
    cloned_element.find(".sunbed_name").html("39A");
} else if (x === 73) {
    cloned_element.find(".sunbed_name").html("39");
} else if (x === 74) {
    cloned_element.find(".sunbed_name").html(38);
} else if (x === 75) {
    cloned_element.find(".sunbed_name").html(37);
} else if (x === 76) {
    cloned_element.find(".sunbed_name").html(36);
} else if (x === 77) {
    cloned_element.find(".sunbed_name").html(35);
} else if (x === 78) {
    cloned_element.find(".sunbed_name").html(34);
} else if (x === 79) {
    cloned_element.find(".sunbed_name").html(33);
} else if (x === 80) {
    cloned_element.find(".sunbed_name").html(32);
} else if (x === 81) {
    cloned_element.find(".sunbed_name").html(31);
} else if (x === 82) {
    cloned_element.find(".sunbed_name").html(30);
} else if (x === 84) {
    cloned_element.find(".sunbed_name").html("29C");
} else if (x === 85) {
    cloned_element.find(".sunbed_name").html("29B");
} else if (x === 86) {
    cloned_element.find(".sunbed_name").html("29A");
} else if (x === 87) {
    cloned_element.find(".sunbed_name").html(29);
} else if (x === 88) {
    cloned_element.find(".sunbed_name").html(28);
}  else if (x === 89) {
    cloned_element.find(".sunbed_name").html(27);
} else if (x === 90) {
    cloned_element.find(".sunbed_name").html(26);
} else if (x === 91) {
    cloned_element.find(".sunbed_name").html(25);
} else if (x === 92) {
    cloned_element.find(".sunbed_name").html(24);
} else if (x === 93) {
    cloned_element.find(".sunbed_name").html(23);
} else if (x === 94) {
    cloned_element.find(".sunbed_name").html(22);
} else if (x === 95) {
    cloned_element.find(".sunbed_name").html(21);
}  else if (x === 96) {
    cloned_element.find(".sunbed_name").html(20);
} else if (x === 98) {
    cloned_element.find(".sunbed_name").html("19C");
} else if (x === 99) {
    cloned_element.find(".sunbed_name").html("19B");
} else if (x === 100) {
    cloned_element.find(".sunbed_name").html("19A");
} else if (x === 101) {
    cloned_element.find(".sunbed_name").html(19);
} else if (x === 102) {
    cloned_element.find(".sunbed_name").html(18);
} else if (x === 103) {
    cloned_element.find(".sunbed_name").html(17);
}  else if (x === 104) {
    cloned_element.find(".sunbed_name").html(16);
} else if (x === 105) {
    cloned_element.find(".sunbed_name").html(15);
} else if (x === 106) {
    cloned_element.find(".sunbed_name").html(14);
} else if (x === 107) {
    cloned_element.find(".sunbed_name").html(13);
} else if (x === 108) {
    cloned_element.find(".sunbed_name").html(12);
} else if (x === 109) {
    cloned_element.find(".sunbed_name").html(11);
} else if (x === 110) {
    cloned_element.find(".sunbed_name").html(10);
} else if (x === 111) {
    cloned_element.find(".sunbed_name").html("10A");
}    
  else if (x === 112) {
    cloned_element.find(".sunbed_name").html("9D");
} else if (x === 113) {
    cloned_element.find(".sunbed_name").html("9C");
} else if (x === 114) {
    cloned_element.find(".sunbed_name").html("9B");
} else if (x === 115) {
    cloned_element.find(".sunbed_name").html("9A");
} else if (x === 116) {
    cloned_element.find(".sunbed_name").html(9);
} else if (x === 117) {
    cloned_element.find(".sunbed_name").html(8);
} else if (x === 118) {
    cloned_element.find(".sunbed_name").html(7);
} else if (x === 119) {
    cloned_element.find(".sunbed_name").html(6);
} else if (x === 120) {
    cloned_element.find(".sunbed_name").html(5);
} else if (x === 121) {
    cloned_element.find(".sunbed_name").html(4);
} else if (x === 122) {
    cloned_element.find(".sunbed_name").html(3);
} else if (x === 123) {
    cloned_element.find(".sunbed_name").html(2);
} else if (x === 124) {
    cloned_element.find(".sunbed_name").html(1);
} else if (x === 125) {
    cloned_element.find(".sunbed_name").html(0);
}

  $(".beach_wrapper").append(cloned_element);
}

//CLONES------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//CLONES COLOR NARANJA
$("#clon_126,#clon_127,#clon_128,#clon_129,#clon_130,#clon_131,#clon_132,#clon_133,#clon_134,#clon_135,#clon_136,#clon_137,#clon_138,#clon_139,#clon_140,#clon_141,#clon_142,#clon_143,#clon_144,#clon_145,#clon_146,#clon_147,#clon_148,#clon_149,#clon_150,#clon_151,#clon_152,#clon_153,#clon_154,#clon_155,#clon_156,#clon_157,#clon_158,#clon_159,#clon_160,#clon_161,#clon_162,#clon_163,#clon_164,#clon_165,#clon_166,#clon_167,#clon_168,#clon_169,#clon_170,#clon_171,#clon_172,#clon_173,#clon_174,#clon_175,#clon_176,#clon_177,#clon_178,#clon_179,#clon_180,#clon_181,#clon_182,#clon_183,#clon_184,#clon_185,#clon_186,#clon_187,#clon_188,#clon_189,#clon_190,#clon_191,#clon_199").addClass('especiales');
//CLONES DESCONECTADOS GENERALES
$("#clon_1,#clon_2,#clon_3,#clon_4,#clon_5,#clon_6,#clon_7,#clon_8,#clon_11,#clon_13,#clon_27,#clon_41,#clon_55,#clon_69,#clon_83,#clon_97").addClass('desconectadosgeneral');
//CLON 10A y CLON 0
$("#clon_111").addClass("clon10A")
$("#clon_125").addClass("clon0")
//CLONES DESCONECTADOS FILA 0
$("#clon_112,#clon_113,#clon_114,#clon_115,#clon_116,#clon_117,#clon_118,#clon_119,#clon_120,#clon_121,#clon_122,#clon_123,#clon_124").addClass("desconectadosFila0");
//CLONES DESCONECTADOS FILA 1
$("#clon_98,#clon_99,#clon_100,#clon_101,#clon_102,#clon_103,#clon_104,#clon_105,#clon_106,#clon_106,#clon_107,#clon_108,#clon_109,#clon_110").addClass("desconectadosFila1");
//CLONES DESCONECTADOS FILA 2
$("#clon_84,#clon_85,#clon_86,#clon_87,#clon_88,#clon_89,#clon_90,#clon_91,#clon_92,#clon_93,#clon_94,#clon_95,#clon_96").addClass("desconectadosFila2");
//CLONES DESCONECTADOS FILA 3
$("#clon_70,#clon_71,#clon_72,#clon_73,#clon_74,#clon_75,#clon_76,#clon_77,#clon_78,#clon_79,#clon_80,#clon_81,#clon_82").addClass("desconectadosFila3");
//CLONES DESCONECTADOS FILA 4
$("#clon_56,#clon_57,#clon_58,#clon_59,#clon_60,#clon_61,#clon_62,#clon_63,#clon_64,#clon_65,#clon_66,#clon_67,#clon_68").addClass("desconectadosFila4");
//CLONES DESCONECTADOS FILA 8
$("#clon_9,#clon_10,#clon_11,#clon_12").addClass("desconectadosfila8");

//FILA ZONA LIBRE EXTRA 1 Y 2
$("#clon_14,#clon_15,#clon_28,#clon_29,#clon_42,#clon_43,#clon_56,#clon_57,#clon_70,#clon_71").addClass("Zonalibre")
$("#clon_84,#clon_85,#clon_98,#clon_99,#clon_112,#clon_113").addClass("Zonalibre2")
//CLONES MAGNETA CARPA
$("#sunbed,#clon_16,#clon_17,#clon_18").addClass('intocables');
//CLONES CON FORMA DE SOMBRILLA RECTANGULO REDONDO
$("#clon_83,#clon_84,#clon_85,#clon_89,#clon_90,#clon_91,#clon_92,#clon_93,#clon_97,#clon_98,#clon_99,#clon_100,#clon_101,#clon_102,#clon_103,#clon_104,#clon_105,#clon_106,#clon_107,#clon_108,#clon_109,#clon_110,#clon_111,#clon_112,#clon_113,#clon_114,#clon_115,#clon_116,#clon_117,#clon_118,#clon_119,#clon_120,#clon_121,#clon_122,#clon_123,#clon_124,#clon_125,#clon_186,#clon_187,#clon_188,#clon_189,#clon_190,#clon_191").addClass('primerafila');
//DE LA 1ª FILA Del 84 al 95.
//DE la 2º FILA del 72 al 83
//DE la 3º FILA DEL 60 AL 70
//DE LA 4º FILA DEL 48 AL 58
//DE LA 5ª FILA DEL 36 AL 46
//DE LA 6ª FILA DEL 24 AL 34
//DE LA 7ª FILA DEL 12 AL 22
//DE LA 8ª FILA DEL 1 AL 10

//Clicking function-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//clear localstorage
function clearClick() {
    if (confirm("¿Estás seguro de que deseas borrar TODOS los datos? Esta acción eliminará todos los colores, nombres de clientes y registros totales. El historial de pagos se mantendrá.")) {
        // Borrar todos los datos en Firebase excepto el historial
        const promises = [
            // Borrar totales
            db.ref('totales').remove().then(() => {
                return db.ref('totales').set({
                    efectivo: 0,
                    tarjeta: 0,
                    general: 0
                });
            }),
            
            // Resetear todas las hamacas a step1 y borrar nombres
            db.ref('sunbeds').remove().then(() => {
                const updates = {};
                document.querySelectorAll('.sunbed').forEach(hamaca => {
                    const hamacaId = hamaca.id;
                    if (hamacaId) {
                        // Mantener el nombre del cliente si existe
                        const customerName = hamaca.querySelector('.customer_name')?.value || '';
                        updates[hamacaId] = {
                            color: '1', // Reset a disponible
                            customer_name: customerName
                        };
                    }
                });
                return db.ref('sunbeds').set(updates);
            }),
            
            // Resetear círculos
            db.ref('circles').remove().then(() => {
                const updates = {};
                document.querySelectorAll('.circle').forEach(circle => {
                    const circleId = circle.id;
                    if (circleId) {
                        updates[circleId] = {
                            step: '1' // Reset a primer estado
                        };
                    }
                });
                return db.ref('circles').set(updates);
            })
        ];

        Promise.all(promises)
            .then(() => {
                console.log("Datos reseteados correctamente");
                
                // Resetear la interfaz
                document.querySelectorAll('.sunbed').forEach(hamaca => {
                    // Remover todas las clases de color
                    hamaca.classList.remove('step1', 'step2', 'step3', 'step4', 'step5', 'step6');
                    // Añadir clase disponible
                    hamaca.classList.add('step1');
                    // Limpiar nombre del cliente
                    const input = hamaca.querySelector('.customer_name');
                    if (input) input.value = '';
                });

                // Resetear círculos en la interfaz
                document.querySelectorAll('.circle').forEach(circle => {
                    circle.classList.remove('step1', 'step2', 'step3');
                    circle.classList.add('step1');
                });
                
                // Resetear totales mostrados
                document.getElementById('totalEfectivo').textContent = '0.00';
                document.getElementById('totalTarjeta').textContent = '0.00';
                document.getElementById('totalGeneral').textContent = '0.00';

                // Reiniciar variables globales
                totalEfectivo = 0;
                totalTarjeta = 0;

                // Recargar la página para asegurar que todo se actualiza
                window.location.reload();
            })
            .catch(error => {
                console.error("Error al resetear los datos:", error);
                alert("Hubo un error al resetear los datos. Por favor, inténtalo de nuevo.");
            });
    }
}

//BOTONES PARA OCULTAR FILAS------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --- SINCRONIZACIÓN DE VISIBILIDAD DE FILAS Y ZONAS CON FIREBASE ---

function setVisibilityInFirebase(key, value) {
  db.ref('visibilidad/' + key).set(value);
}

function listenVisibilityFromFirebase(key, selector) {
  db.ref('visibilidad/' + key).on('value', (snapshot) => {
    const vis = snapshot.val() || "hidden";
    $(selector).css("visibility", vis);
  });
}

// Adaptar funciones toggle para guardar en Firebase
function toggleDesconectadosFila8() {
  var $el = $(".desconectadosfila8");
  var currentVisibility = $el.css("visibility");
  var newVisibility = (currentVisibility === "hidden") ? "visible" : "hidden";
  $el.css("visibility", newVisibility);
  setVisibilityInFirebase('desconectadosFila8', newVisibility);
}
function toggledesconectadosFila4() {
  var $el = $(".desconectadosFila4");
  var currentVisibility = $el.css("visibility");
  var newVisibility = (currentVisibility === "hidden") ? "visible" : "hidden";
  $el.css("visibility", newVisibility);
  setVisibilityInFirebase('desconectadosFila4', newVisibility);
}
function toggledesconectadosFila3() {
  var $el = $(".desconectadosFila3");
  var currentVisibility = $el.css("visibility");
  var newVisibility = (currentVisibility === "hidden") ? "visible" : "hidden";
  $el.css("visibility", newVisibility);
  setVisibilityInFirebase('desconectadosFila3', newVisibility);
}
function toggledesconectadosFila2() {
  var $el = $(".desconectadosFila2");
  var currentVisibility = $el.css("visibility");
  var newVisibility = (currentVisibility === "hidden") ? "visible" : "hidden";
  $el.css("visibility", newVisibility);
  setVisibilityInFirebase('desconectadosFila2', newVisibility);
}
function toggledesconectadosFila1() {
  var $el = $(".desconectadosFila1");
  var currentVisibility = $el.css("visibility");
  var newVisibility = (currentVisibility === "hidden") ? "visible" : "hidden";
  $el.css("visibility", newVisibility);
  setVisibilityInFirebase('desconectadosFila1', newVisibility);
}
function toggleDesconectadosFila0() {
  var $el = $(".desconectadosFila0");
  var currentVisibility = $el.css("visibility");
  var newVisibility = (currentVisibility === "hidden") ? "visible" : "hidden";
  $el.css("visibility", newVisibility);
  setVisibilityInFirebase('desconectadosFila0', newVisibility);
}
function toggleZonalibre() {
  var $el = $(".Zonalibre");
  var currentVisibility = $el.css("visibility");
  var newVisibility = (currentVisibility === "hidden") ? "visible" : "hidden";
  $el.css("visibility", newVisibility);
  setVisibilityInFirebase('Zonalibre', newVisibility);
}
function toggleZonalibre2() {
  var $el = $(".Zonalibre2");
  var currentVisibility = $el.css("visibility");
  var newVisibility = (currentVisibility === "hidden") ? "visible" : "hidden";
  $el.css("visibility", newVisibility);
  setVisibilityInFirebase('Zonalibre2', newVisibility);
}
function toggleclon10A() {
  var $el = $(".clon10A");
  var currentVisibility = $el.css("visibility");
  var newVisibility = (currentVisibility === "hidden") ? "visible" : "hidden";
  $el.css("visibility", newVisibility);
  setVisibilityInFirebase('clon10A', newVisibility);
}
function toggleclon0() {
  var $el = $(".clon0");
  var currentVisibility = $el.css("visibility");
  var newVisibility = (currentVisibility === "hidden") ? "visible" : "hidden";
  $el.css("visibility", newVisibility);
  setVisibilityInFirebase('clon0', newVisibility);
}

// Listeners para sincronizar visibilidad en tiempo real
$(document).ready(function() {
  listenVisibilityFromFirebase('desconectadosFila8', '.desconectadosfila8');
  listenVisibilityFromFirebase('desconectadosFila4', '.desconectadosFila4');
  listenVisibilityFromFirebase('desconectadosFila3', '.desconectadosFila3');
  listenVisibilityFromFirebase('desconectadosFila2', '.desconectadosFila2');
  listenVisibilityFromFirebase('desconectadosFila1', '.desconectadosFila1');
  listenVisibilityFromFirebase('desconectadosFila0', '.desconectadosFila0');
  listenVisibilityFromFirebase('Zonalibre', '.Zonalibre');
  listenVisibilityFromFirebase('Zonalibre2', '.Zonalibre2');
  listenVisibilityFromFirebase('clon10A', '.clon10A');
  listenVisibilityFromFirebase('clon0', '.clon0');
});

//VISIBILIDAD DE LOS CIRCULOS---------------

// Declarar circlesVisible antes de cualquier uso
let circlesVisible = true;

// Comprobar el estado guardado en localStorage al cargar la página
window.onload = function() {
  // Verificamos si hay un estado guardado en localStorage
  const savedState = localStorage.getItem('circlesVisible');
  if (savedState !== null) {
    circlesVisible = savedState === 'true'; // Convertirlo a un valor booleano
  }

  // Actualizar la visibilidad de los círculos según el estado guardado
  const circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    circle.style.display = circlesVisible ? 'block' : 'none';
  });
};

// Función para alternar la visibilidad de los círculos y guardar el estado
function toggleCircles() {
  const circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    circle.style.display = circlesVisible ? 'none' : 'block';
  });

  // Guardar el nuevo estado en localStorage
  circlesVisible = !circlesVisible;
  localStorage.setItem('circlesVisible', circlesVisible); // Guardamos el estado
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var SunbedController = function() {
    return {
        init: function() {
            this.bind_listeners();
            this.restore_customers_name();
            this.restore_sunbeds_colors();
            this.retreive_prices();
            this.restore_comments();
            this.restore_total_sold();
        },

        bind_listeners: function() {
            $("input.customer_name").keyup(function () {
                var text = $(this).val();
                var target_id = $(this).closest(".sunbed").attr('id');
                guardarNombreCliente(target_id, text);
            });

            $("#comments").keyup(function() {
               let actual_value = $(this).val();
               // Puedes guardar comentarios en Firebase si lo deseas
               // db.ref('comments').set(actual_value);
            });

          
            
        },

        restore_customers_name: function() {},

        restore_sunbeds_colors: function() {},

        retreive_prices: function() {
            shopping_cart = 0;
            total_sold = 0;

            var saved_total = localStorage.getItem('total_sold');
            if (saved_total) {
                total_sold = parseInt(saved_total);
            }

            var saved_shopping_cart = localStorage.getItem('shopping_cart');
            if (saved_shopping_cart) {
                shopping_cart = parseInt(saved_shopping_cart);
            }

            this.update_prices();
        },

        update_prices: function() {
            $("#shopping_cat_value").html(shopping_cart);
            $("#total_price_value").html(total_sold);
        },

        reset_local_storage_except_customers: function() {           
            try {
                // Asegurarse de que db está inicializado
                if (!db) {
                    throw new Error('Firebase no está inicializado');
                }

                // Mostrar indicador de carga
                const loadingIndicator = document.createElement('div');
                loadingIndicator.style.position = 'fixed';
                loadingIndicator.style.top = '50%';
                loadingIndicator.style.left = '50%';
                loadingIndicator.style.transform = 'translate(-50%, -50%)';
                loadingIndicator.style.padding = '20px';
                loadingIndicator.style.background = 'rgba(0,0,0,0.8)';
                loadingIndicator.style.color = 'white';
                loadingIndicator.style.borderRadius = '10px';
                loadingIndicator.style.zIndex = '9999';
                loadingIndicator.textContent = 'Reseteando colores...';
                document.body.appendChild(loadingIndicator);

                // Primero, actualizar la interfaz local
                document.querySelectorAll('.sunbed').forEach(hamaca => {
                    hamaca.classList.remove('step1', 'step2', 'step3', 'step4', 'step5', 'step6');
                    hamaca.classList.add('step1');
                });

                // Resetear también los círculos en la interfaz
                document.querySelectorAll('.circle').forEach(circle => {
                    circle.classList.remove('step1', 'step2', 'step3');
                    circle.classList.add('step3');
                    circle.dataset.actualStep = '3';
                });

                // Luego, actualizar Firebase
                Promise.all([
                    // Actualizar hamacas
                    db.ref('sunbeds').once('value').then((snapshot) => {
                        const updates = {};
                        snapshot.forEach((childSnapshot) => {
                            const sunbedId = childSnapshot.key;
                            const data = childSnapshot.val();
                            updates[sunbedId] = {
                                ...data,
                                color: 'green'
                            };
                        });
                        return db.ref('sunbeds').update(updates);
                    }),
                    // Actualizar círculos - nuevo enfoque
                    db.ref('circles').remove().then(() => {
                        const circleUpdates = {};
                        document.querySelectorAll('.circle').forEach(circle => {
                            const circleId = circle.id;
                            if (circleId) {
                                circleUpdates[circleId] = {
                                    step: '3',
                                    lastUpdated: new Date().toISOString()
                                };
                                // Actualizar también el estado local
                                circle.classList.remove('step1', 'step2', 'step3');
                                circle.classList.add('step3');
                                circle.dataset.actualStep = '3';
                            }
                        });
                        return db.ref('circles').set(circleUpdates);
                    })
                ]).then(() => {
                    // Forzar una actualización de la interfaz
                    document.querySelectorAll('.circle').forEach(circle => {
                        circle.classList.remove('step1', 'step2', 'step3');
                        circle.classList.add('step3');
                        circle.dataset.actualStep = '3';
                    });

                    // Remover indicador de carga
                    document.body.removeChild(loadingIndicator);
                    
                    // Forzar actualización de la interfaz
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }).catch((error) => {
                    // Remover indicador de carga en caso de error
                    if (document.body.contains(loadingIndicator)) {
                        document.body.removeChild(loadingIndicator);
                    }
                    console.error("Error al resetear colores:", error);
                    alert("Hubo un error al resetear los colores. Por favor, inténtalo de nuevo.");
                });
            } catch (error) {
                console.error("Error de inicialización:", error);
                alert("Error al inicializar Firebase. Por favor, recarga la página e inténtalo de nuevo.");
            }
        },



        restore_comments: function () {
            var old_comments = localStorage.getItem('comments');
            if (old_comments) {
                $("#comments").val(old_comments);
            }
        },


        restore_total_sold: function(){
            localStorage.getItem(total_sold);
            localStorage.removeItem(total_sold);
        }
    };
}();

// Agrega un evento de clic al botón "Fila 8"
$("#fila8_btn").click(function () {
    // Cambia la visibilidad de los clones del 6 al 10
    for (var x = 6; x <= 10; x++) {
        $("#clon_" + x).css("visibility", "hidden");
    }
});

SunbedController.init();

//CALCuLadora--------------------------------

function calcularCambio() {
  const hamaca = document.getElementById('hamaca').value;
  if (!hamaca) {
    alert('Introduzca número de hamaca');
    document.getElementById('hamaca').focus();
    return;
  }
  const totalSelect = parseFloat(document.getElementById('totalSelect').value);
  const totalManual = parseFloat(document.getElementById('totalManual').value);
  const recibidoManual = parseFloat(document.getElementById('recibidoManual').value);
  const metodo = document.getElementById('pago').checked ? 'tarjeta' : 'efectivo';
  const sombrillaExtra = document.getElementById('sombrillaExtra').checked ? 'si' : 'no';

  let total = totalManual || totalSelect;
  
  // Añadir 4€ si hay sombrilla extra
  if (sombrillaExtra === 'si') {
    total += 4;
  }
  
  // Si es pago con tarjeta, no necesitamos el monto recibido
  let recibido = 0;
  let cambio = 0;
  
  if (metodo === 'efectivo') {
    recibido = recibidoManual;
    if (isNaN(total) || isNaN(recibido)) {
      alert("Por favor, introduce montos válidos.");
      return;
    }
    cambio = recibido - total;
  } else {
    // Para tarjeta, el cambio siempre es 0
    recibido = total;
    cambio = 0;
  }

  // Cambiar el color de la hamaca específica a rojo
  if (hamaca) {
    // Buscar la hamaca exacta por su número
    const hamacaElement = $('.sunbed_name').filter(function() {
      return $(this).text().trim() === hamaca;
    }).closest('.sunbed');

    if (hamacaElement.length > 0) {
      // Remover todas las clases de color anteriores
      hamacaElement.removeClass('step1 step2 step3 step4 step5 step6');
      // Agregar la clase step2 (rojo)
      hamacaElement.addClass('step2');
      // Guardar el estado en localStorage
      const hamacaId = hamacaElement.attr('id');
      guardarColorSunbed(hamacaId, '2');
    }
  }

  document.getElementById('resultado').textContent = `Cambio: €${cambio.toFixed(2)}`;

  const historial = document.getElementById('historial');
  const li = document.createElement('li');

  const fechaObj = new Date();
  const dia = String(fechaObj.getDate()).padStart(2, '0');
  const mes = String(fechaObj.getMonth() + 1).padStart(2, '0');
  const anio = fechaObj.getFullYear();
  const horas = String(fechaObj.getHours()).padStart(2, '0');
  const minutos = String(fechaObj.getMinutes()).padStart(2, '0');
  const fecha = `${dia}/${mes}/${anio} ${horas}:${minutos}`;

  // Añadir información de sombrilla extra al historial si está seleccionada
  const sombrillaInfo = sombrillaExtra === 'si' ? ' (Sombrilla Extra)' : '';
  li.textContent = `Hamaca ${hamaca} - Total: €${total.toFixed(2)}${sombrillaInfo} - Recibido: €${recibido.toFixed(2)} - Cambio: €${cambio.toFixed(2)} - Método: ${metodo} - ${fecha}`;
  historial.insertBefore(li, historial.firstChild);

  // Actualizar totales en Firebase
  db.ref('totales').transaction((currentTotales) => {
    const totales = currentTotales || { efectivo: 0, tarjeta: 0, general: 0 };
    if (metodo === 'efectivo') {
      totales.efectivo = (parseFloat(totales.efectivo) || 0) + total;
    } else {
      totales.tarjeta = (parseFloat(totales.tarjeta) || 0) + total;
    }
    totales.general = totales.efectivo + totales.tarjeta;
    return totales;
  });

  // Guardar en Firebase
  guardarHistorialPago({
    fecha,
    hamaca: hamaca || "-",
    total: total.toFixed(2),
    recibido: recibido.toFixed(2),
    cambio: cambio.toFixed(2),
    metodo,
    sombrillaExtra: sombrillaExtra === 'si'
  });

  // Reiniciar los campos después del cálculo
  document.getElementById('hamaca').value = '';
  document.getElementById('totalSelect').selectedIndex = 1; // 16€ 2 hamacas
  document.getElementById('totalManual').value = '';
  document.getElementById('recibidoManual').value = '';
  document.getElementById('pago').checked = false; // Efectivo
  document.getElementById('sombrillaExtra').checked = false; // No
}

function procesarDevolucion() {
  const hamaca = document.getElementById('hamaca').value;
  const totalSelect = parseFloat(document.getElementById('totalSelect').value);
  const totalManual = parseFloat(document.getElementById('totalManual').value);
  const metodo = document.getElementById('pago').value;

  const total = totalManual || totalSelect;

  if (isNaN(total)) {
    alert("Por favor, introduce un monto válido.");
    return;
  }

  const devolucion = total;
  document.getElementById('resultado').textContent = `Devolución: €${devolucion.toFixed(2)}`;

  const historial = document.getElementById('historial');
  const li = document.createElement('li');

  const fechaObj = new Date();
  const dia = String(fechaObj.getDate()).padStart(2, '0');
  const mes = String(fechaObj.getMonth() + 1).padStart(2, '0');
  const anio = fechaObj.getFullYear();
  const horas = String(fechaObj.getHours()).padStart(2, '0');
  const minutos = String(fechaObj.getMinutes()).padStart(2, '0');
  const fecha = `${dia}/${mes}/${anio} ${horas}:${minutos}`;

  li.textContent = `Devolución Hamaca ${hamaca} - Total: €${total.toFixed(2)} - Devolución: €${devolucion.toFixed(2)} - Método: ${metodo} - ${fecha}`;
  historial.insertBefore(li, historial.firstChild);

  // Actualizar totales en Firebase
  db.ref('totales').transaction((currentTotales) => {
    const totales = currentTotales || { efectivo: 0, tarjeta: 0, general: 0 };
    if (metodo === 'efectivo') {
      totales.efectivo = (parseFloat(totales.efectivo) || 0) - total;
    } else {
      totales.tarjeta = (parseFloat(totales.tarjeta) || 0) - total;
    }
    totales.general = totales.efectivo + totales.tarjeta;
    return totales;
  });

  // Guardar en Firebase
  guardarHistorialPago({
    fecha,
    hamaca: hamaca || "-",
    total: total.toFixed(2),
    devolucion: devolucion.toFixed(2),
    metodo
  });

  // Reiniciar campos
  document.getElementById('hamaca').value = '';
  document.getElementById('totalSelect').selectedIndex = 0;
  document.getElementById('totalManual').value = '';
  document.getElementById('recibidoManual').value = '';
  document.getElementById('pago').selectedIndex = 0;
}

function toggleHistorial() {
  const historialContainer = document.getElementById('historialContainer');
  historialContainer.style.display = historialContainer.style.display === 'none' ? 'block' : 'none';
}

function mostrarHistorialResumen() {
  const historialContainer = document.getElementById('historialContainer');
  const historial = document.getElementById('historial');
  
  if (!historialContainer || !historial) {
    console.error('No se encontraron los elementos del historial');
    return;
  }

  // Mostrar el contenedor
  historialContainer.style.display = 'block';
  
  // Limpiar el historial actual
  historial.innerHTML = '';
  
  // Mostrar indicador de carga
  historial.innerHTML = '<li>Cargando historial...</li>';
  
  // Obtener el historial de Firebase
  db.ref('historial').once('value')
    .then((snapshot) => {
      if (!snapshot.exists()) {
        historial.innerHTML = '<li>No hay registros en el historial</li>';
        return;
      }

      const historialData = snapshot.val();
      const historialArray = Object.entries(historialData)
        .map(([id, data]) => ({
          id,
          ...data
        }))
        .sort((a, b) => {
          try {
            const fechaA = new Date(a.fecha.split(' ')[0].split('/').reverse().join('-'));
            const fechaB = new Date(b.fecha.split(' ')[0].split('/').reverse().join('-'));
            return fechaB - fechaA;
          } catch (error) {
            console.error('Error al ordenar fechas:', error);
            return 0;
          }
        });

      historial.innerHTML = ''; // Limpiar el mensaje de carga

      historialArray.forEach(registro => {
        try {
          const li = document.createElement('li');
          if (registro.devolucion) {
            li.textContent = `Devolución Hamaca ${registro.hamaca} - Total: €${registro.total} - Devolución: €${registro.devolucion} - Método: ${registro.metodo} - ${registro.fecha}`;
          } else {
            const sombrillaInfo = registro.sombrillaExtra ? ' (Sombrilla Extra)' : '';
            li.textContent = `Hamaca ${registro.hamaca} - Total: €${registro.total}${sombrillaInfo} - Recibido: €${registro.recibido} - Cambio: €${registro.cambio} - Método: ${registro.metodo} - ${registro.fecha}`;
          }
          historial.appendChild(li);
        } catch (error) {
          console.error('Error al procesar registro:', error, registro);
        }
      });
    })
    .catch(error => {
      console.error('Error al obtener el historial:', error);
      historial.innerHTML = '<li>Error al cargar el historial. Por favor, inténtalo de nuevo.</li>';
    });
}

//FUNCIONAMIENTO DE SERVICE WORKER NO TOCAR
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
        try {
      const swPath = './sw.js'; // Ruta relativa al Service Worker
      const registration = await navigator.serviceWorker.register(swPath, {
        scope: './' // Scope relativo
      });
      console.log("Service Worker registrado correctamente en:", registration.scope);
    } catch (err) {
      console.error("Error al registrar el Service Worker:", err);
    }
  });
}





// Bucle de colores para los círculos
function setupColorCycle(selector, stepsCount, storagePrefix) {
    $(selector).each(function (index) {
        const el = $(this);
        const isCircle = el.hasClass('circle');
        
        // Asegurarse de que el elemento tiene un ID
        if (!el.attr('id')) {
            el.attr('id', 'circle_' + index);
        }

        el.on('dblclick', function (event) {
            event.stopPropagation();

            const currentStep = parseInt(el.data('actual-step')) || 0;
            const newStep = currentStep >= stepsCount ? 1 : currentStep + 1;

            // Eliminar clases anteriores
            for (let i = 1; i <= stepsCount; i++) {
                el.removeClass('step' + i);
            }

            // Añadir nueva clase
            el.addClass('step' + newStep);
            el.data('actual-step', newStep);

            // Guardar en Firebase
            if (isCircle) {
                const circleId = el.attr('id');
                console.log('Guardando círculo:', circleId, 'con step:', newStep);
                guardarStepCircle(circleId, newStep);
            } else {
                guardarColorSunbed(el.attr('id'), newStep);
            }
        });
    });
}

// Aplicamos color cycle separado
setupColorCycle('.circle', 3, 'circle_color_');
setupColorCycle('.sunbed', 6, 'sunbed_color_');


//------zona pruebas

// Manejo del menú contextual de colores
document.addEventListener('DOMContentLoaded', function() {
    const contextMenu = document.getElementById('colorContextMenu');
    let activeSunbed = null;
    let touchTimer = null;
    let touchStartX = 0;
    let touchStartY = 0;
    const LONG_PRESS_DURATION = 500;
    const TOUCH_MOVE_THRESHOLD = 10;

    // Función para mostrar el menú contextual
    function showContextMenu(e, sunbed) {
        e.preventDefault();
        e.stopPropagation();
        activeSunbed = sunbed;
        
        // Obtener la posición del evento táctil o del clic
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        const y = e.touches ? e.touches[0].clientY : e.clientY;
        
        // Posicionar el menú cerca del punto de toque pero asegurando que sea visible
        contextMenu.style.left = (x - contextMenu.offsetWidth / 2) + 'px';
        contextMenu.style.top = (y - contextMenu.offsetHeight - 20) + 'px';
        
        // Ajustar si el menú se sale de la pantalla
        const rect = contextMenu.getBoundingClientRect();
        if (rect.left < 10) contextMenu.style.left = '10px';
        if (rect.right > window.innerWidth - 10) {
            contextMenu.style.left = (window.innerWidth - contextMenu.offsetWidth - 10) + 'px';
        }
        if (rect.top < 10) {
            contextMenu.style.top = (y + 20) + 'px';
        }
        
        contextMenu.style.display = 'block';
        contextMenu.classList.add('visible');
        
        // Marcar la opción actualmente seleccionada
        const currentStep = sunbed.dataset.actualStep || '1';
        contextMenu.querySelectorAll('.color-option').forEach(option => {
            option.classList.toggle('selected', option.dataset.step === currentStep);
        });
    }

    // Función para ocultar el menú
    function hideContextMenu() {
        contextMenu.classList.remove('visible');
        setTimeout(() => {
            contextMenu.style.display = 'none';
        }, 200);
        activeSunbed = null;
    }

    // Eventos táctiles mejorados para las hamacas
    document.querySelectorAll('.sunbed').forEach(sunbed => {
        sunbed.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchTimer = setTimeout(() => {
                showContextMenu(e, sunbed);
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            }, LONG_PRESS_DURATION);
        }, { passive: false });

        sunbed.addEventListener('touchmove', function(e) {
            if (touchTimer) {
                const moveX = Math.abs(e.touches[0].clientX - touchStartX);
                const moveY = Math.abs(e.touches[0].clientY - touchStartY);
                if (moveX > TOUCH_MOVE_THRESHOLD || moveY > TOUCH_MOVE_THRESHOLD) {
                    clearTimeout(touchTimer);
                    touchTimer = null;
                }
            }
        }, { passive: true });

        sunbed.addEventListener('touchend', function() {
            if (touchTimer) {
                clearTimeout(touchTimer);
                touchTimer = null;
            }
        });
    });

    // Evento para clic derecho en desktop
    document.addEventListener('contextmenu', function(e) {
        const sunbed = e.target.closest('.sunbed');
        if (sunbed) {
            e.preventDefault();
            showContextMenu(e, sunbed);
        }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (contextMenu.style.display === 'block' && !contextMenu.contains(e.target)) {
            hideContextMenu();
        }
    });

    // Manejar la selección de color
    contextMenu.addEventListener('click', function(e) {
        const colorOption = e.target.closest('.color-option');
        if (colorOption && activeSunbed) {
            const step = colorOption.dataset.step;
            
            // Eliminar clases anteriores
            for (let i = 1; i <= 6; i++) {
                activeSunbed.classList.remove('step' + i);
            }
            
            // Añadir nueva clase
            activeSunbed.classList.add('step' + step);
            activeSunbed.dataset.actualStep = step;
            
            // Guardar en Firebase
            guardarColorSunbed(activeSunbed.id, step);
            
            // Feedback táctil
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
            
            hideContextMenu();
        }
    });

    // Cerrar menú en eventos adicionales
    window.addEventListener('scroll', hideContextMenu);
    window.addEventListener('resize', hideContextMenu);
    window.addEventListener('orientationchange', hideContextMenu);
});

// Función para cargar los estados de las hamacas desde localStorage
function cargarEstadosHamacas() {}

function scrollHistorial(direction) {
  const container = document.getElementById('historialContainer');
  const scrollAmount = 100; // Cantidad de píxeles a desplazar
  
  if (direction === 'up') {
    container.scrollTop -= scrollAmount;
  } else {
    container.scrollTop += scrollAmount;
  }
}

// === BOTONERA FIJA INFERIOR ===
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu-desplegable');
  if (menu) {
    menu.style.display = 'none'; // Ocultar el menú por defecto al cargar
  }
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && e.target !== menuToggle) {
        menu.style.display = 'none';
      }
    });
  }
});

// === FUNCIONES FIREBASE REALTIME ===

// Guardar nombre de cliente en Firebase en vez de localStorage
function guardarNombreCliente(clonId, nombre) {
  db.ref('sunbeds/' + clonId).update({ customer_name: nombre });
}

// Guardar color/step de sunbed en Firebase en vez de localStorage
function guardarColorSunbed(clonId, colorStep) {
  db.ref('sunbeds/' + clonId).update({ color: colorStep });
}

// Guardar color/step de circle en Firebase en vez de localStorage
function guardarStepCircle(circleId, step) {
  if (!circleId) {
    console.error('Error: circleId no definido');
    return;
  }
  console.log('Guardando en Firebase - circleId:', circleId, 'step:', step);
  db.ref('circles/' + circleId).set({
    step: step,
    lastUpdated: new Date().toISOString()
  }).catch(error => {
    console.error('Error al guardar en Firebase:', error);
  });
}

// Guardar historial de pagos en Firebase en vez de localStorage
function guardarHistorialPago(data) {
  const newRef = db.ref('historial').push();
  const timestamp = new Date().toISOString();
  
  // Asegurarse de que todos los campos necesarios estén presentes
  const historialData = {
    ...data,
    timestamp,
    fecha: data.fecha || timestamp,
    total: data.total || '0',
    recibido: data.recibido || '0',
    cambio: data.cambio || '0',
    metodo: data.metodo || 'efectivo',
    hamaca: data.hamaca || '-',
    sombrillaExtra: data.sombrillaExtra || false
  };

  console.log('Guardando en historial:', historialData);
  
  newRef.set(historialData)
    .then(() => {
      console.log('Datos guardados correctamente en historial');
    })
    .catch(error => {
      console.error('Error al guardar en historial:', error);
    });
}

// === ESCUCHAR CAMBIOS EN TIEMPO REAL ===

$(document).ready(function() {
  // Sincronizar colores y nombres de hamacas
  db.ref('sunbeds').on('value', (snapshot) => {
    const sunbeds = snapshot.val();
    for (const clonId in sunbeds) {
      const color = sunbeds[clonId].color;
      const nombre = sunbeds[clonId].customer_name;
      // Solo actualiza si existe en el DOM
      const $hamaca = $('#' + clonId);
      if ($hamaca.length) {
        $hamaca.removeClass('step1 step2 step3 step4 step5 step6');
        if (color) $hamaca.addClass('step' + color);
        $hamaca.find('.customer_name').val(nombre || '');
      } else {
        // Si no existe en el DOM, elimina la hamaca de Firebase
        db.ref('sunbeds/' + clonId).remove();
      }
    }
  });

  // Sincronizar steps de círculos
  db.ref('circles').on('value', (snapshot) => {
    const circles = snapshot.val();
    console.log('Recibiendo actualización de círculos:', circles);
    
    if (circles) {
      for (const circleId in circles) {
        const step = circles[circleId].step;
        const $circle = $('#' + circleId);
        
        if ($circle.length) {
          console.log('Actualizando círculo:', circleId, 'con step:', step);
          $circle.removeClass('step1 step2 step3');
          if (step) {
            $circle.addClass('step' + step);
            $circle.data('actual-step', step);
          }
        } else {
          console.log('Círculo no encontrado en DOM:', circleId);
        }
      }
    }
  });

  // Inicializar los círculos con sus colores actuales
  db.ref('circles').once('value').then((snapshot) => {
    const circles = snapshot.val();
    if (circles) {
      for (const circleId in circles) {
        const step = circles[circleId].step;
        const $circle = $('#' + circleId);
        if ($circle.length && step) {
          $circle.removeClass('step1 step2 step3');
          $circle.addClass('step' + step);
          $circle.data('actual-step', step);
        }
      }
    }
  });

  // Sincronizar historial de pagos
  db.ref('historial').on('value', (snapshot) => {
    const historial = snapshot.val();
    const $historial = $('#historial');
    $historial.empty();
    if (historial) {
      // Convertir el objeto a array y ordenar por fecha más reciente
      const historialArray = Object.entries(historial)
        .map(([key, value]) => ({
          ...value,
          key
        }))
        .sort((a, b) => {
          // Convertir las fechas a objetos Date para comparación
          const fechaA = new Date(a.fecha.split(' ')[0].split('/').reverse().join('-') + ' ' + a.fecha.split(' ')[1]);
          const fechaB = new Date(b.fecha.split(' ')[0].split('/').reverse().join('-') + ' ' + b.fecha.split(' ')[1]);
          return fechaB - fechaA; // Orden descendente (más reciente primero)
        });

      historialArray.forEach(entry => {
        const li = document.createElement('li');
        if (entry.devolucion) {
          li.textContent = `Devolución Hamaca ${entry.hamaca} - Total: €${entry.total} - Devolución: €${entry.devolucion} - Método: ${entry.metodo} - ${entry.fecha}`;
        } else {
          const sombrillaInfo = entry.sombrillaExtra ? ' (Sombrilla Extra)' : '';
          li.textContent = `Hamaca ${entry.hamaca} - Total: €${entry.total}${sombrillaInfo} - Recibido: €${entry.recibido} - Cambio: €${entry.cambio} - Método: ${entry.metodo} - ${entry.fecha}`;
        }
        $historial.append(li);
      });
    }
  });
});

// --- Sincronización del registro total ---
$(document).ready(function() {
  db.ref('historial').on('value', (snapshot) => {
    const historial = snapshot.val();
    let totalEfectivo = 0;
    let totalTarjeta = 0;
    if (historial) {
      Object.values(historial).forEach(entry => {
        if (!entry.devolucion) {
          const total = parseFloat(entry.total);
          if (entry.metodo === 'efectivo') {
            totalEfectivo += total;
          } else {
            totalTarjeta += total;
          }
        } else {
          const total = parseFloat(entry.total);
          if (entry.metodo === 'efectivo') {
            totalEfectivo -= total;
          } else {
            totalTarjeta -= total;
          }
        }
      });
    }
    $("#totalEfectivo").text(totalEfectivo.toFixed(2));
    $("#totalTarjeta").text(totalTarjeta.toFixed(2));
    $("#totalGeneral").text((totalEfectivo + totalTarjeta).toFixed(2));
  });
});

// Función para crear y mostrar el diálogo personalizado
function showCustomDialog(message, onConfirm, onCancel) {
    // Crear el contenedor del diálogo
    const dialog = document.createElement('div');
    dialog.style.position = 'fixed';
    dialog.style.top = '0';
    dialog.style.left = '0';
    dialog.style.width = '100%';
    dialog.style.height = '100%';
    dialog.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    dialog.style.display = 'flex';
    dialog.style.justifyContent = 'center';
    dialog.style.alignItems = 'center';
    dialog.style.zIndex = '9999';

    // Crear el contenido del diálogo
    const content = document.createElement('div');
    content.style.backgroundColor = 'white';
    content.style.padding = '20px';
    content.style.borderRadius = '10px';
    content.style.width = '80%';
    content.style.maxWidth = '400px';
    content.style.textAlign = 'center';

    // Crear el mensaje
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.style.marginBottom = '20px';
    content.appendChild(messageElement);

    // Crear los botones
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.gap = '10px';

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Sí';
    confirmButton.style.padding = '10px 20px';
    confirmButton.style.backgroundColor = '#4CAF50';
    confirmButton.style.color = 'white';
    confirmButton.style.border = 'none';
    confirmButton.style.borderRadius = '5px';
    confirmButton.style.cursor = 'pointer';
    confirmButton.style.fontSize = '16px';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'No';
    cancelButton.style.padding = '10px 20px';
    cancelButton.style.backgroundColor = '#f44336';
    cancelButton.style.color = 'white';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '5px';
    cancelButton.style.cursor = 'pointer';
    cancelButton.style.fontSize = '16px';

    buttonContainer.appendChild(confirmButton);
    buttonContainer.appendChild(cancelButton);
    content.appendChild(buttonContainer);
    dialog.appendChild(content);

    // Añadir el diálogo al body
    document.body.appendChild(dialog);

    // Funciones para los botones
    confirmButton.onclick = () => {
        document.body.removeChild(dialog);
        if (onConfirm) onConfirm();
    };

    cancelButton.onclick = () => {
        document.body.removeChild(dialog);
        if (onCancel) onCancel();
    };
}

// Variables para el estado de conexión
let isConnected = localStorage.getItem('dbConnectionState') !== 'disconnected';
let dbListeners = [];

// Función para inicializar Firebase y sus listeners
function initializeFirebase() {
  if (!window.db) {
    console.error('Firebase no está inicializado todavía');
    setTimeout(initializeFirebase, 100);
    return;
  }

  // --- Sincronización del registro total ---
  $(document).ready(function() {
    db.ref('historial').on('value', (snapshot) => {
      const historial = snapshot.val();
      let totalEfectivo = 0;
      let totalTarjeta = 0;
      if (historial) {
        Object.values(historial).forEach(entry => {
          if (!entry.devolucion) {
            const total = parseFloat(entry.total);
            if (entry.metodo === 'efectivo') {
              totalEfectivo += total;
            } else {
              totalTarjeta += total;
            }
          } else {
            const total = parseFloat(entry.total);
            if (entry.metodo === 'efectivo') {
              totalEfectivo -= total;
            } else {
              totalTarjeta -= total;
            }
          }
        });
      }
      $("#totalEfectivo").text(totalEfectivo.toFixed(2));
      $("#totalTarjeta").text(totalTarjeta.toFixed(2));
      $("#totalGeneral").text((totalEfectivo + totalTarjeta).toFixed(2));
    });
  });

  // Inicializar el estado de la conexión
  const btnElement = document.getElementById('db-connection-btn');
  if (btnElement) {
    if (localStorage.getItem('dbConnectionState') === 'disconnected') {
      disconnectFromFirebase();
    } else {
      db.goOnline();
      btnElement.classList.remove('disconnected');
      btnElement.querySelector('.connection-text').textContent = 'Conectado';
    }
    
    btnElement.addEventListener('click', function() {
      if (isConnected) {
        if (confirm('¿Estás seguro de que deseas desconectar la base de datos? Los cambios no se sincronizarán hasta que vuelvas a conectar.')) {
          disconnectFromFirebase();
        }
      } else {
        if (confirm('¿Deseas reconectar la base de datos?')) {
          connectToFirebase();
        }
      }
    });
  }

  // Inicializar otros listeners de Firebase
  if (typeof registerDbListener === 'function') {
    db.ref('sunbeds').on('value', function callback(snapshot) {
      // ... código existente ...
    });
    registerDbListener(db.ref('sunbeds'), callback);
  }
}

// Esperar a que el DOM esté listo y Firebase esté inicializado
$(document).ready(function() {
  initializeFirebase();
});

// Función para desconectar de Firebase
function disconnectFromFirebase() {
  // Desconectar todos los listeners
  dbListeners.forEach(listener => {
    if (listener.ref && listener.callback) {
      listener.ref.off('value', listener.callback);
    }
  });
  dbListeners = [];
  
  // Desconectar la base de datos
  db.goOffline();
  isConnected = false;
  
  // Guardar estado en localStorage
  localStorage.setItem('dbConnectionState', 'disconnected');
  
  // Actualizar UI
  const btnElement = document.getElementById('db-connection-btn');
  btnElement.classList.add('disconnected');
  btnElement.querySelector('.connection-text').textContent = 'Desconectado';
}

// Función para reconectar a Firebase
function connectToFirebase() {
  // Reconectar la base de datos
  db.goOnline();
  isConnected = true;
  
  // Guardar estado en localStorage
  localStorage.setItem('dbConnectionState', 'connected');
  
  // Actualizar UI
  const btnElement = document.getElementById('db-connection-btn');
  btnElement.classList.remove('disconnected');
  btnElement.querySelector('.connection-text').textContent = 'Conectado';
  
  // Recargar la página para restablecer todos los listeners
  window.location.reload();
}

function reiniciarCalculadora() {
  // Limpiar el historial y resetear totales en Firebase
  const promises = [
    // Limpiar historial
    db.ref('historial').remove(),
    // Resetear totales
    db.ref('totales').set({
      efectivo: 0,
      tarjeta: 0,
      general: 0
    })
  ];

  Promise.all(promises).then(() => {
    // Actualizar la interfaz de totales
    document.getElementById('totalEfectivo').textContent = '0.00';
    document.getElementById('totalTarjeta').textContent = '0.00';
    document.getElementById('totalGeneral').textContent = '0.00';
    
    // Limpiar la lista del historial en la interfaz
    document.getElementById('historial').innerHTML = '';
  }).catch(error => {
    console.error('Error al reiniciar calculadora:', error);
  });
}
