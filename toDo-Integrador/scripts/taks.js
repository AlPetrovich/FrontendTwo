window.addEventListener("load", function () {
  userName();
  obtenerTareas();
  cierreDeSesion();

  console.log(contenedorPen);
  console.log(document.querySelector(".tareas-pendientes").querySelectorAll(".not-done"));
  

});

/!FUNCION DONDE OBTENGO DATOS DE USUARIO/;
function userName() {
  let urlAPI = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";
  let jwt = localStorage.getItem("jwt");
  //console.log(jwt);

  const config = {
    method: "GET",
    headers: {
      authorization: jwt,
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch(urlAPI, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => renderizarDatos(data));
}
/!FUNCION PARA RENDERIZAR DATOS DEL USUARIO/;
function renderizarDatos(data) {
  let p = document.querySelector(".user-info p");
  p.innerHTML = `${data.firstName} ${data.lastName}`;
}

/!FUNCION PARA OBTENER TAREAS DEL USUARIO/;
function obtenerTareas() {
  let urlApi = "https://ctd-todo-api.herokuapp.com/v1/tasks";
  let JWT = localStorage.getItem("jwt");

  const config = {
    method: "GET",
    headers: {
      authorization: JWT,
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch(urlApi, config)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderizarListado(data);
    });
}

let bottonForm = document.querySelector(".nueva-tarea");
bottonForm.addEventListener("submit", capturarBoton);
function capturarBoton(e) {
  e.preventDefault();
  crearNuevaTarea();
}

/!FUNCION PARA CREAR TAREAS DEL USUARIO/;
function crearNuevaTarea() {
  let url = " https://ctd-todo-api.herokuapp.com/v1/tasks";
  let jwt = localStorage.getItem("jwt");
  console.log(jwt);
  let input = document.getElementById("nuevaTarea"); //Capturo el input
  //objeto para el body
  const tarea = {
    completed: false,
    description: input.value,
  };
  //settings
  const config = {
    method: "POST",
    headers: {
      authorization: jwt,
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(tarea),
  };
  fetch(url, config)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      console.log(data);
    })

    .catch((err) => {
      let mensaje = "Ocurrio un error";
      alert(`Error: ${mensaje} ${err}`);
    });
}

//To-Do App v.4
let contenedorPen = document.querySelector(".tareas-pendientes");
let contenedorTer = document.querySelector(".tareas-terminadas");

function renderizarListado(listado) {
  listado.forEach((e) => {
    if (e.completed && e.description !== "") {
      contenedorTer.innerHTML += `<li class="tarea">
        <div class="done"></div>
        <div class="descripcion">
        <p class="nombre">${e.description}</p>
        <div>
        <button><i id="${e.id}" class="fas fa-undo-alt change"></i></button>
        <button><i id="${e.id}" class="far fa-trash-alt"></i></button>
        </div>
        </div>
        </li>
        `;
    } else {
      if (e.description !== "") {
        contenedorPen.innerHTML += `<li class="tarea">
          <div class="not-done change" id="${e.id}"></div>
          <div class="descripcion">
          <p class="nombre">${e.description}</p>
          <p class="timestamp"><i class="far fa-calendar-alt"></i> ${e.createdAt}</p>
          </div>
          </li>`;
      }
    }
  });


  let jwt = localStorage.getItem("jwt");
  contenedorPen.querySelectorAll(".not-done").forEach((el) => {
    el.addEventListener("click", function () {
      alert(this.id);
      const url = `https://ctd-todo-api.herokuapp.com/v1/tasks/${this.id}`;
      const info = {
        description: this.description,
        completed: true,
      };

      const config = {
        method: "PUT",
        body: JSON.stringify(info),
        headers: {
          id: this.id,
          authorization: jwt,
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      fetch(url, config)
        .then((res) => res.json())
        .then((data) => {
          renderizarDatos(data);
          console.log(data);
        });
    });
  })

  
  contenedorTer.querySelectorAll(".fa-trash-alt").forEach(el=>{
    el.addEventListener("click",function(){
      alert(this.completed);
      const url=`https://ctd-todo-api.herokuapp.com/v1/tasks/${this.id}`
     
      const config={
        method:"DELETE",
        headers:{
          id:this.id,
          authorization:jwt
        }
      }
      fetch(url,config)
      .then(res=> res.json())
      .then(data=>{
        console.log(data);
      })


    })
  })

}

















function cierreDeSesion() {
  let botonCierre = document.getElementById("closeApp");
  botonCierre.addEventListener("click", function () {
    let misDatos = localStorage.getItem("jwt");
    console.log(misDatos);
  });
}
