import Datos from "../molecules/Datos";
import './DatosCuriosos.css';
function DatosCuriosos(){

    return(
        <>
        <div id="div-padre-DatosCuriosos">
            <Datos imagen = "/public/tierraPlana.png" texto = "DATO 1: En Suiza es ilegal tener una sola cobaya. Se considera maltrato animal porque son seres sociales y se sienten solos."></Datos>
            <Datos imagen = "/public/conejo.jpg" texto  ="DATO 2: Los conejos bebé se llaman gazapos. ¡Qué bonito!"></Datos>
            <Datos imagen = "/public/B-8lIosWoAEU8Bf.jpg" texto = "DATO 3: El unicornio es el animal nacional de Escocia. Al parecer, se eligió por su relación con el dominio y la caballerosidad, así como con la pureza y la inocencia en la mitología celta."></Datos>
        </div>
        </>
    )
}

export default DatosCuriosos;