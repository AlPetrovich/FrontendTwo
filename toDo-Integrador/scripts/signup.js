let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let password = document.getElementById("contrasenia");
let passwordConfirm = document.getElementById("repetirContrasenia");
let formulario = document.querySelector("form");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validarNombreyApellido() && validarMail() && validarContra()) {
    register();

    console.log("Datos correctos");
  } else {
    console.log("Datos invalidos");
  }

});

//FUNCIONES PARA VALIDAR CAMPOS
function validarNombreyApellido() {
  let regex = new RegExp(
    "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,32}"  //min3 max 32
  );
  return regex.test(nombre.value, apellido.value);
}

function validarMail() {
  let regex = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );
  return regex.test(email.value);
}

function validarContra() {
  let regex = new RegExp("[A-Za-z0-9!?-]{8,12}");   //puede contener mayus min numeros caracteres especiales y entre 8 a 12 caracteres
  if (contrasenia.value === repetirContrasenia.value) {
    return regex.test(contrasenia.value, repetirContrasenia.value);
  } else {
    console.log("Error en las contraseñas");
  }
}

//FUNCION PARA REGISTRAR DATOS DE USUARIO
function register(){
  let info = {
    firstName:nombre.value,   //Alexis
    lastName:apellido.value,  //Petrovich
    email: email.value,        //alexispetrovich11@gmail.com
    password: contrasenia.value //123456789
  };

  let url = " https://ctd-todo-api.herokuapp.com/v1/users"; //chequear url
  let options={
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(info),
  }

  fetch(url,options)
    .then(response=>{

      return response.json();
    })
    .then(data=>{
      if(data.jwt){
       const usuario={
         jwt:data.jwt
       }
       location.href="index.html";
      // localStorage.setItem('jwt',JSON.stringify(usuario));
      }
    })
}

