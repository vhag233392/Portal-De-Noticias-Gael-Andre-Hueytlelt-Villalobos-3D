import Noticia from "../molecules/Noticia";
import './NoticiaSemanal.css'
function NoticiaSemanal(){

    return(
        <div id="nodo-padre-noticia-semanal">
            
            <div id="div-hijo1-noticia-semanal">
                <Noticia imagen = "/public/nintendo.jpg" titulo="Nintendo anuncia la compra del estudio Shiver Entertainment" texto=" El fabricante japonés y desarrollador de consolas y videojuegos Nintendo llegó a un acuerdo con el grupo sueco Embracer para adquirir el 100% de las acciones en circulación de Shiver Entertainment. La transacción, se completará una vez cumplidas las condiciones de cierre habituales y tendrá sólo un efecto menor en los resultados de Nintendo para el año fiscal en curso.

 "></Noticia>
                
                <Noticia imagen = "/public/starwars.jpg" titulo = "Star Wars Outlaws de Ubisoft saldrá a la venta el 30 de agosto" texto = "El esperado videojuego Star Wars Outlaws, inspirado en la saga La Guerra de las Galaxias creada por George Lucas, saldrá a la venta el 30 de agosto, anunció el martes el estudio Ubisoft. realizado en colaboración con LucasFilm, introduce al jugador en la piel de Kay Vess, una forajida que se mueve en el interior del Imperio." ></Noticia>
                
                
            </div>
            <div id="div-hijo2-noticia-semanal">
                <Noticia imagen = './public/china.jpg_392844078.jpg' titulo = "China inicia dos días de ejercicios militares cerca de Taiwán tras investidura de nuevo presidente" texto = "China inició este jueves dos días de ejercicios militares alrededor de la isla de Taiwán como fuerte castigo por los actos separatistas en este territorio tras la investidura de un nuevo presidente detestado por Pekín. Considerado por las autoridades comunistas como un peligroso separatista, Lai Ching-te se propuso el lunes como presidente con un discurso en el que celebró la democracia de Taiwán e instó a China a cesar su intimidación política y militar." ></Noticia>
                
                <Noticia imagen = "/public/gta.jpg" titulo= "Take-Two despedirá a unos 600 empleados" texto = "la multinacional propietaria de la saga de videojuegos 'GTA', informó de que su junta directiva ha aprobado un programa de reducción de costes que espera completar para final de año y que supondrá un ajuste del 5% de la fuerza laboral de la empresa. " ></Noticia>
            </div>
        </div>
    )
}

export default NoticiaSemanal;