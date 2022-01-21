// let i = 0;

// function contador() {
//     document.querySelector("p").innerHTML = i++
//         console.log(i);
// }

// function mostrarMensajeConsola(){
//     console.log(i);
// }

// function mostrarMensajePantalla(){
//     alert(i);
// }


// let button=document.querySelector("button");
// button.addEventListener("click",function(){
//     contador();
// })
// button.addEventListener("click", mostrarMensajePantalla);
// button.addEventListener("click",mostrarMensajeConsola);
// button.addEventListener("click",contador)


// 2da parte-----------------------------------------



var n=0;
var l=document.getElementById("number");
let cont;

function contar(){
    cont=setInterval(function(){
        l.innerHTML=n;
        n++;
    },1000);
}
contar();

const button=document.querySelector(".boton");
// let contando=true;

function stopAndPlay(){
    if(button.innerHTML=="Detener"){
        clearInterval(cont);
        console.log("Se detuvo el contador");
        button.innerHTML="Play";
        // contando=false;
    }else{
        contar();
        button.innerHTML="Detener";
        // contando=true;
    }
}

button.addEventListener("click", stopAndPlay);






