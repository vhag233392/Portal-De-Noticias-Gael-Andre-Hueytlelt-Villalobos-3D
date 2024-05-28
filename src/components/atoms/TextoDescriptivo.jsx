import './TextoDescriptivo.css'
function TextoDescriptivo(props){

    return(

        <div id='textoDesc-style'>

        <p>{props.texto}</p>
        </div>
    )
}

export default TextoDescriptivo;