// /* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
// let datosPersona = {
//   nombre: "",
//   edad: 0,
//   ciudad: "",
//   interesPorJs: "",
// };

// const listado = [
//   {
//     imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
//     lenguajes: "HTML y CSS",
//     bimestre: "1er bimestre",
//   },
//   {
//     imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
//     lenguajes: "Javascript",
//     bimestre: "2do bimestre",
//   },
//   {
//     imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
//     lenguajes: "React JS",
//     bimestre: "3er bimestre",
//   },
// ];

// const profileBtn = document.querySelector("#completar-perfil");
// const materiasBtn = document.querySelector("#obtener-materias");
// const verMasBtn = document.querySelector("#sobre-mi");
// const cambiarTema = document.querySelector("#cambiar-tema");

// profileBtn.addEventListener("click", renderizarDatosUsuario);
// materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
// cambiarTema.addEventListener("click", alternarColorTema);
// /* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

// function obtenerDatosDelUsuario() {
//   /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
//   datosPersona.nombre = prompt("Ingresa tu nombre");
//   datosPersona.edad = 2021 - parseInt(prompt("Ingresa el año en que naciste"));
//   datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
//   datosPersona.interesPorJs = confirm("Te interesa Javascript?");
// }

// function renderizarDatosUsuario() {
//   /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
//   obtenerDatosDelUsuario();
//   /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

//   const nombre = document.getElementById("nombre");
//   nombre.textContent = datosPersona.nombre;

//   const edad = document.getElementById("edad");
//   edad.textContent = datosPersona.edad;

//   const ciudad = document.getElementById("ciudad");
//   ciudad.textContent = datosPersona.ciudad;

//   const interesJvs = document.getElementById("javascript");

//   if (datosPersona.interesPorJs) {
//     interesJvs.textContent = "Si";
//   } else {
//     interesJvs.textContent = "No";
//   }
// }

// function recorrerListadoYRenderizarTarjetas() {
//   /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
//   const contenedor = document.getElementById("fila");
//   listado.forEach((e) => {
//     if (true) {
//       contenedor.innerHTML += `
//       <div class="caja">
//       <img src="${e.imgUrl}" alt="${e.lenguajes}">
//       <p class="lenguajes">Lenguajes: ${e.lenguajes}</p>
//       <p class="bimestre">Bimestre: ${e.bimestre}</p>
//       </div>
//       `;

//       /*Otra solucion propuesta*/

//       /*const card = document.createElement("div");
//       card.classList.add("caja");
//       const img = document.createElement("img");
//       img.setAttribute("src", e.imgUrl);
//       img.setAttribute("alt", e.lenguajes);
//       const parrafoL = document.createElement("p");
//       parrafoL.classList.add("lenguajes");
//       parrafoL.textContent = "Lenguajes: " + e.lenguajes;
//       const parrafoB = document.createElement("p");
//       parrafoB.classList.add("bimestre");
//       parrafoB.textContent = "Bimestre: " + e.bimestre;
//       card.appendChild(img);
//       card.appendChild(parrafoL);
//       card.appendChild(parrafoB);
//       contenedor.appendChild(card);*/
//     }

//     materiasBtn.removeEventListener(
//       "click",
//       recorrerListadoYRenderizarTarjetas
//     );
//   });
// }

// function alternarColorTema() {
//   /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

//   const sitio = document.getElementById("sitio");
//   sitio.classList.toggle("dark");
// }

// /* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

// window.addEventListener("keypress", (e) => {
//   if (e.key == "f" || e.key == "F") {
//     verMasBtn.classList.toggle("oculto");
//   }
// });
/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#sobre-mi");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = 2021 - parseInt(prompt("Ingresa el año en que naciste"));
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  datosPersona.interesPorJs = confirm("Te interesa Javascript?");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  const nombre = document.getElementById("nombre");
  nombre.textContent = datosPersona.nombre;

  const edad = document.getElementById("edad");
  edad.textContent = datosPersona.edad;

  const ciudad = document.getElementById("ciudad");
  ciudad.textContent = datosPersona.ciudad;

  const interesJvs = document.getElementById("javascript");

  if (datosPersona.interesPorJs) {
    interesJvs.textContent = "Si";
  } else {
    interesJvs.textContent = "No";
  }
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const contenedor = document.getElementById("fila");
  listado.forEach((e) => {
    if (true) {
      contenedor.innerHTML += `
      <div class="caja">
      <img src="${e.imgUrl}" alt="${e.lenguajes}">
      <p class="lenguajes">Lenguajes: ${e.lenguajes}</p>
      <p class="bimestre">Bimestre: ${e.bimestre}</p>
      </div>
      `;

      /*Otra solucion propuesta*/

      /*const card = document.createElement("div");
      card.classList.add("caja");
      const img = document.createElement("img");
      img.setAttribute("src", e.imgUrl);
      img.setAttribute("alt", e.lenguajes);
      const parrafoL = document.createElement("p");
      parrafoL.classList.add("lenguajes");
      parrafoL.textContent = "Lenguajes: " + e.lenguajes;
      const parrafoB = document.createElement("p");
      parrafoB.classList.add("bimestre");
      parrafoB.textContent = "Bimestre: " + e.bimestre;
      card.appendChild(img);
      card.appendChild(parrafoL);
      card.appendChild(parrafoB);
      contenedor.appendChild(card);*/
    }

    materiasBtn.removeEventListener(
      "click",
      recorrerListadoYRenderizarTarjetas
    );
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  const sitio = document.getElementById("sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("keypress", (e) => {
  if (e.key == "f" || e.key == "F") {
    verMasBtn.classList.toggle("oculto");
  }
});