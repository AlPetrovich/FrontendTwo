const apiUrl="https://dog.ceo/api/breeds/image/random";

function callApi(){
    fetch(apiUrl)
    .then(respuesta=>{
        console.log(respuesta);
        return respuesta.json();
    })
    .then(datos=>{
        document.querySelector("img").setAttribute("src",datos.message);
    })
    .catch(error=>{
        console.log("Ocurrio un error al llamar a la api",error)
    });
}

let button =document.querySelector("button");
button.addEventListener("click",function(){
    callApi();

});





    // window.onload=function(){
    //     const ol = document.getElementById("fetch"),
    //     fragment = document.createDocumentFragment();
    
    //     fetch("https://jsonplaceholder.typicode.com/users")
    
    //     // .then(res=>{
    //     //   console.log(res);
    //     //   return res.ok?res.json(): Promise.reject(res);
    //     // })
    //     .then((res)=> res.ok?res.json(): Promise.reject(res))
    
    //     .then(json=>{
    //       json.forEach(e=>{
    //         const li=document.createElement("li");
    //         li.innerHTML=`${e.name}--${e.email}--${e.phone}`;
    //         fragment.appendChild(li);
    //       })
    //       ol.appendChild(fragment);
    //     })
    
    //     .catch(err=>{
    //     console.log(err);
    //     let mensaje=err.statusText || "Ocurrio un error";
    //     ol.innerHTML=`Error ${err.status}:${mensaje}`
    //   })
    //     .finally(()=>{
    //       console.log("Esto se ejecuta siempre")
    //     });
    // }