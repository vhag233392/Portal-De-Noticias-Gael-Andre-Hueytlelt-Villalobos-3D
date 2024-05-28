import './Icono.css'
import Imagen from './Imagen';

function Icono(props){
    return(

       <Imagen imagen={props.icono}></Imagen>
    )
}

export default Icono;