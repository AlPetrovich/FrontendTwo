window.addEventListener('load', () =>{

    noticias.forEach(e => {
  
       const tipoNoticia = e.tipoNacional ? ".nacionales" : ".internacionales";
       
       const contenedor = `<div class="noticias">
       <h2>${e.titulo}</h2>
       <img src="${e.imgUrl}" alt="">
       <p>${e.descripcion}</p>
       <p><strong>Fecha:</strong> ${e.fecha}</p>
   </div>`
   
  const secciones = document.querySelector(tipoNoticia); 
  secciones.innerHTML += contenedor;

    })







})