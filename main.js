// for

// for (let x = 0 ; x < 10; x ++) {
//     console.log ("Ciclo numero " + x);
// }


// // for anidado

// for (let x = 0 ; x < 10; x ++) {
//     console.log ("Ciclo numero " + x);

//     for (let y =0; y < 5 ; y++) {
//         console.log (" Ciclo secundario " + y);
//     }
// }




// // while
// let x = 0;
// while (x < 10) {
//     alert ("Ahora x vale " + x);
//     console.log ("Ciclo numero " + x);
//     x = x + 1;
// }




// // do..while

// let z = 0;
// do {
//     console.log ("Ciclo do..while numero " + z);
//     z++;
// } while (z < 5);


// switch

let diaDeLaSemana = 8;

switch (diaDeLaSemana) {
    case 1:
        console.log ("Lunes");
        break;
    case 2:
        console.log ("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log ("Ese dia no existe");
        break;

}