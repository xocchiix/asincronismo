// function suma(num1, num2) {
//   return num1 + num2;
// }

// function calcular(num1, num2, cb) {
//   return cb(num1, num2);
// }

// console.log(calcular(6, 2, suma));
// * -------------------------------

function fecha(cb) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    cb(date);
  }, 3000);
}

function mostrarFecha(fechaHoy) {
  console.log(fechaHoy);
}

fecha(mostrarFecha);
