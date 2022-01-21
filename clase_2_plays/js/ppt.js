// let jugar=confirm("Queres jugar?");
// let eleccionUsuario= prompt("Elija su jugada piedra=1, papel=2, tijera=3");
// let eleccionComputadora=Math.floor(Math.random()*3)+1;
// let usTra=traductor(eleccionUsuario);
// let pcTra=traductor(eleccionComputadora);
// function traductor(elementoATraducir){
//   let traducido;
//   if(elementoATraducir==1){
//     traducido="Piedra";
//   }else if(elementoATraducir==2){
//     traducido="Papel";
//   }else if(elementoATraducir==3){
//     traducido="Tijera";
//   }else{
//     console.log("Valor invalido");
//   }
//   return traducido;
// }
// console.log("Tu oponente eligio "+pcTra);
// console.log("Tu eleccion fue "+usTra);

// const resultados={
//   resultado1:"Ganaste",
//   resultado2:"Empate",
//   resultado3:"Perdiste",
//   comparacion:function(usEleccion,pcEleccion){
//     if(usEleccion==pcEleccion){
//       console.log(this.resultado2);
//     }else if((usEleccion == 1 && pcEleccion == 3) ||
//     (usEleccion == 3 && pcEleccion == 2) ||
//     (usEleccion == 2 && pcEleccion == 1)){
//       console.log(this.resultado1);
//     }else if(usEleccion>3){
//       console.log("");
//     }else{
//       console.log(this.resultado3);
//     }
//   }
// }

// resultados.comparacion(eleccionUsuario,eleccionComputadora);


// let usuario = 2;

// let computadora = Math.floor(Math.random() * 3) + 1;

// const resultado = {
//   victoria: "ganaste🙌",
//   derrota: "perdiste😢",
//   empate: "empate🤷‍♂️",
//   comparacion: function (usuario, computadora) {
//     if (usuario == computadora) {
//       console.log(this.empate);
//     } else if (
//       (usuario == 0 && computadora == 2) ||
//       (usuario == 2 && computadora == 1) ||
//       (usuario == 1 && computadora == 0)
//     ) {
//       console.log(this.victoria);
//     } else {
//       console.log(this.derrota);
//     }
//   },
// };

// resultado.comparacion(usuario, computadora);



