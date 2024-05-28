import './Datos.css';
import Imagen from '../atoms/Imagen'
import TextoDescriptivo from '../atoms/TextoDescriptivo';
function Datos(props){

    return(
        <>
        <div id="divPadre-datos">
        <Imagen imagen = {props.imagen}></Imagen>
        <TextoDescriptivo texto = {props.texto}></TextoDescriptivo>
        </div>
        </>
    )

}

export default Datos;