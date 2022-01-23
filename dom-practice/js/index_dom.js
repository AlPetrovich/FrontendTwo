import hamburgerMenu from "./menu_Hamb.js";
import darkTheme from "./tema_oscuro.js";
const d=document;

d.addEventListener("DOMContentLoaded",e=>{     //representa la carga del documento
    hamburgerMenu(".panel-btn",".panel",".menu a");

    // BOTON OSCURO
    darkTheme(".dark-theme-btn","dark-mode");
})



