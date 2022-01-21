
let submit = document.querySelector('form');
submit.addEventListener('submit', function(event) {
    let name = document.getElementById('nombre').value;
    let password = document.getElementById('pass').value;

    if(nameIsValid(name)){
        //setUpMessage()
    }else{
        showErrorMessages();
    }


    let hobbies = '';
    document.getElementsByName('hobbies').forEach((item, index) => {
        if (item.checked) {
            if (index == 0) {
                hobbies = hobbies.concat(item.value);  //solamente concateno sin , y espacio
            } else {
                hobbies = hobbies.concat(', ', item.value); //luego del primero agrego ,
            }
        }
    });

    let text = `Nombre: ${name}
    Contraseña: ${password}
    Hobbies: ${hobbies}`;

    console.log(hobbies.split(', '));
    console.log(text);
    event.preventDefault();
});


let errors=[];
let hobbiesSelected=0;
let checks=document.getElementsByName("hobbies");

checks.forEach(e=>{
    e.addEventListener("click",function(){
        //si se tilda
        if(e.checked){
            if(hobbiesSelected>=4){
                this.checked=false;
                errors.push("No se pueden seleccionar mas de 4 hobbies.");
            }else{
                hobbiesSelected++;
            }
            
        //si se destilda
        }else{
            hobbiesSelected--;
        }
        showErrorMessages();
        console.log(hobbiesSelected);
    })
})

function showErrorMessages(){
    if(errors.length>0){
        let ul=document.querySelector(".errors ul");
        errors.forEach(e=>{
            ul.innerHTML +=`<li>${e}</li>`;
        })
    }
}


function nameIsValid(name){
    let noValid=[0,1,2,3,4,5,6,7,8,9,"@"];
    let i=0;
    let nameValid=true;
    while( nameValid && i<=noValid.length){   
        if(name.includes(noValid[i])){
            nameValid=false;
            errors.push("El nombre no puede contener valores numericos");
        }
        i++;
    }
    return nameValid;

}


let inputName=document.getElementById("nombre");
inputName.addEventListener("keypress",e=>{
    if(nameIsValid(e.key)==false){
        e.preventDefault();
        showErrorMessages();
    }
});


// inputName.addEventListener("blur",function(){
//     this.value=this.value.toUpperCase();
//     console.log(this);
// })

function normalizeText(text){
    text=text.toLowerCase();

    text.split(" ").forEach(word=>{
        word=word[0].toUpperCase()+ word.slice(1);  //el slice me da todos los caracteres menos el primero
        console.log(word);
        console.log(word[0].toUpperCase(), word.slice(1));
    });
}

console.log(normalizeText("alexis emiliano agustin perez"));

let query= new URLSearchParams(location.search);

if(query.has("name")){
    //console.log(query.get("name"));
    document.querySelector("#nombre").value=query.get("name");
    document.querySelector("#pass").value=query.get("pass");

}







