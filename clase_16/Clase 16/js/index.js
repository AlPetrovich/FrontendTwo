//Seleccion el contenedor donde voy a renderizar 
const mensajeBanca = document.querySelector('.bancaMobile');
//almaceno la promesa en una variable
let peticion = new Promise((resolve, reject) => {

    //simulamos nuestra cuenta en el banco
    const cuentaBancaria = {
        estado: "activa", // si lo cambio por inactiva me lo rechaza
        usuario: "Felipe Erira",
        cajaDeAhorros: 100  //Juego con ese valor si lo cambio a 0 me va a decir fondos insuficientes
    };
    //Las condiciones se van a ejecutar despues de 2.5segundos
    setTimeout(function () {
        if (cuentaBancaria.estado == "inactiva") {
            reject({ //Son las opciones rechazadas y van dentro de un objeto 
                mensaje: "Cuenta inactiva",
            });
        } else if (cuentaBancaria.cajaDeAhorros < 1) {
            reject({
                mensaje: "Fondos insuficientes",
            });
        } else {
            resolve( //Es la opcion Aceptada
                {
                    mensaje: "Pago acreditado correctamente",
                }
            );
        }
    }, 3000);
});

//Con then si resuelvo la promesa se ejecuta la funcion
peticion.then(respuesta => {
    mensajeBanca.innerHTML = `<h5>${respuesta.mensaje}</h5>`;
    // Con catch si la promesa es rechazada se ejecuta la funcion
}).catch(error => {
    mensajeBanca.innerHTML = `<h5>${error.mensaje}</h5>`;
});


