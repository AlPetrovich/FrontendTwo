(()=>{
  const ol = document.getElementById("fetch"),
    fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")

    // .then(res=>{
    //   console.log(res);
    //   return res.ok?res.json(): Promise.reject(res);
    // })
    .then((res)=> res.ok?res.json(): Promise.reject(res))

    .then(json=>{
      json.forEach(e=>{
        const li=document.createElement("li");
        li.innerHTML=`${e.name}--${e.email}--${e.phone}`;
        fragment.appendChild(li);
      })
      ol.appendChild(fragment);
    })

    .catch(err=>{
    console.log(err);
    let mensaje=err.statusText || "Ocurrio un error";
    ol.innerHTML=`Error ${err.status}:${mensaje}`
  })
    .finally(()=>{
      console.log("Esto se ejecuta siempre")
    });
})();

(()=>{
  const fetchAsync=document.getElementById("fetch-async"),
  fragment=document.createDocumentFragment();

  async function getData(){
    try{
      let res=await fetch("https://jsonplaceholder.typicode.com/users");
      let json=await res.json();
      // console.log(res,json);

     // if(!res.ok) throw new Error("Ocurrio un error al solicitar los datos");
      if(!res.ok) throw{status: res.status, statusText: res.statusText }

      json.forEach(e=>{
        const li=document.createElement("li");
        li.innerHTML=`${e.name}--${e.email}--${e.phone}`;
        fragment.appendChild(li);
      });

      fetchAsync.appendChild(fragment);

    }catch(err){
      let mensaje= err.statusText || "Ocurrio un error";
      fetchAsync.innerHTML= `Error ${err.status}:${mensaje}`;
    }finally{
      console.log("Se ejecuta siempre")
      
    }
    
  }
  getData();
})();