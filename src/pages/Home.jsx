import NoticiaEstelar from '../components/organisms/NoticiaEstelar';
import NoticiaSemanal from '../components/organisms/NoticiaSemanal';
import DatosCuriosos from '../components/organisms/DatosCuriosos';
import Footer from '../components/organisms/Footer';
import './Home.css'
import Encabezado from '../components/organisms/Encabezado';

function Home(){
    return(<>
        <Encabezado></Encabezado>
        <div id='colorFondo'>
            <br />
        <NoticiaEstelar></NoticiaEstelar>
        <br />
        <NoticiaSemanal></NoticiaSemanal>
        <br />
        <DatosCuriosos></DatosCuriosos>
        <br />
       
        <Footer></Footer>
        </div>
        
    </>
    )
}

export default Home;