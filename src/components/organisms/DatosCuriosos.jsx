import Datos from "../molecules/Datos";
import "./DatosCuriosos.css";
function DatosCuriosos() {
    return (
        <div id="div-padre-DatosCuriosos">
        <div class="datos">
            <img src="./public/cobaya.jpeg" alt="Cobaya" />
            <p>
            DATO 1: En Suiza es ilegal tener una sola cobaya. Se considera
            maltrato animal porque son seres sociales y se sienten solos.
            </p>
        </div>
        <div class="datos">
            <img src="./public/conejo.jpg" alt="Conejo" />
            <p>DATO 2: Los conejos bebé se llaman gazapos. ¡Qué bonito!</p>
        </div>
        <div class="datos">
            <img src="./public/B-8lIosWoAEU8Bf.jpg" alt="Unicornio" />
            <p>
            DATO 3: El unicornio es el animal nacional de Escocia. Al parecer, se
            eligió por su relación con el dominio y la caballerosidad, así como
            con la pureza y la inocencia en la mitología celta.
            </p>
        </div>
        </div>
    );
}

export default DatosCuriosos;
