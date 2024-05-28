import './Noticia.css'
import Titulo from '../atoms/Titulo'
import Imagen from '../atoms/Imagen';
import TextoDescriptivo from '../atoms/TextoDescriptivo'
import Like from '../atoms/Like'
function Noticia(props){

    return(
        <div id='noticias-style'>
            <div id='Titulo-Imagen-Style'>

        <Titulo titulo = {props.titulo}></Titulo>
        <Imagen imagen = {props.imagen}></Imagen>
            </div>
            <div id='Noticia-TextoDesc-Style'>
        <TextoDescriptivo texto = {props.texto}></TextoDescriptivo>
        <Like></Like>
            </div>
            
        </div>
        

    )
}

export default Noticia;