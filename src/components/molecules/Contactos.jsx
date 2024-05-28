import Icono from "../atoms/Icono";
import './Contactos.css'

function Contactos(){

    return(
           <div id="divPadre-Contactos">
           <h1>CONTACTOS</h1>
        <div id="Contactos">

            <Icono icono = '/public/instagram.png'></Icono>
            <Icono icono = "/public/facebook.png"></Icono>
            <Icono icono = "/public/pinterest.png"></Icono>
            <Icono icono = "/public/x.png"></Icono>
           </div>
        </div>
    )
}

export default Contactos;