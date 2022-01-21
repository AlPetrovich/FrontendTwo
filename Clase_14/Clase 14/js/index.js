document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let textToSearch = document.querySelector('#busqueda').value;
    let url = `https://www.google.com.ar/search?q=${textToSearch}`;

   
    saveSearchInHistory(textToSearch);
    console.log();
    showSearchHistory();
    location.href = url;
    
    // reemplaza el historial del navegador
    // location.replace(url);
});

let searchHistory = [];

function saveSearchInHistory(textToSearch) {
    //Busco del localStore para que no se pierd ael historial el resfrescar
    let searchHistory=JSON.parse(localStorage.getItem("search"));
    searchHistory.push(textToSearch);
    localStorage.setItem('search', JSON.stringify(searchHistory));
}

let list = document.querySelector('#busquedas-realizadas');

function showSearchHistory() {
    //Antes de cargar el listado, borro los elementos anteriores
    list.innerHTML="";

    let history = JSON.parse(localStorage.getItem('search'));
    history.forEach(element => {
        let nodo = document.createElement('p');
        let texto = document.createTextNode(element);
        nodo.appendChild(texto);

        list.appendChild(nodo);
    });
}

showSearchHistory();