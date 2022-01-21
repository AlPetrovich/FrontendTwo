
let mail = document.querySelector("#inputEmail");
let pass = document.querySelector("#inputPassword");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let validMail = isValidMail();//No eran necesarias las variables solo con las funciones en el condicional ya andaba
  let validPass = isValidPass();


    if(validMail && validPass){
        loginUser();
        
    }else{
        //registrar el error
        console.log("Ingreso invalido");
        registerLoginAttempt(mail.value, pass.value);
    }

});


function isValidMail() {
  let regex = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );
  return regex.test(mail.value);
}

function isValidPass() {
  return pass.value.length >= 8 && pass.value.length <= 12; //&& pass.value.includes(".");
}



let button=document.querySelector("button");

mail.addEventListener("keyup",function(){
    enableButton();
});

pass.addEventListener("keyup",function(){
    enableButton();
});
function enableButton(){
    if(mail.value.length>=5 && pass.value.length>=5){
        button.disabled=false;
        //button.removeAttribute("disabled");
    }
}
// let loginAttempts=[];

// function registerLoginAttempt(user,pass){
//     let attempt={
//         userLogin: user,
//          password: pass
//     };

//     loginAttempts.push(attempt);
// }

// function showLoginAttemtps(){
//     console.log(loginAttempts);
// }

// function showLoginAttemtsInJson(){
//     console.log(JSON.stringify(loginAttempts));
//}

function loginUser(){
    let info={
        email:mail.value,
        password:pass.value
  
    }

    let url = " https://ctd-todo-api.herokuapp.com/v1/users/login";
    let options={
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(info),
    }
    
    fetch(url,options)
    .then(response=> response.json())
    .then(data=>{
      if(data.jwt){
        localStorage.setItem('jwt',data.jwt)
      }
      location.href="mis-tareas.html";
    })
      
}

//let jwt='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…U1NX0.yVefbT1I00-qOYPE3d_uZ5gVVD_EomDifmJBa-jhZcA';
//123456789