function enviarMensaje(evento){
    console.log(evento.target.dataset);

    let info={
        title:evento.target.dataset.titulo,
        userId:evento.target.dataset.idUsuario
    }

    let url="https://jsonplaceholder.typicode.com/posts";
    fetch(url,{
        method:"POST",
        body: JSON.stringify(info),
        header: {
            "Content-type":"application/json ; charset=UTF-8"
        }
    })
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log("Respuesta API: ", data);
       
    })
}

let buttons=document.querySelectorAll("button");

buttons.forEach(e=>{
    e.addEventListener("click",enviarMensaje);
})

//let jwt="guardar aca el jwt";






// window.onload=function(){
//     //Armamos la info que queremos enviar, va a ser un objeto literal, los atributos o esquema de este objeto
//     //va a depender de la appi, en este caso image_id value etc.
//     let data={
//         image_id:"asf2",
//         sub_id:"my-user-1234",
//         value:1
//     }
//     //Segundo pase se arma la setting que como minimo debe tener el metodo post y tenemos que aclarar la propiedad body
//     //que va a tener una version jeisonificada de los datos que tenemos arriba
//     //en tercer lugar el encabezado que no siempre es necesario, va a depender mucho de la api
//     //un encabezado comun es poner la api key, en este caso es un codigo que dio la api para poder acceder con un usuario
//     let settings={
//         "method":"POST",
//         "headers":{
//             "content-type":"application/json",
//             "x-api-key":"98d0ffa5-5d01-42d0-b830-ab27347edad"
//         },
//         "body":JSON.stringify(data)
//     }

//     //Ahora llamos a fetch como siempre solo que como segundo parametro le mandamos todas las configuraciones que
//     //acabamos de crear
//     fetch("https://api.thecatapi.com/v1/votes",settings)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(info){
//         console.log(info);
//     })
//     .catch(function(e){
//         console.log("Error! "+ e)
//     })
// }

