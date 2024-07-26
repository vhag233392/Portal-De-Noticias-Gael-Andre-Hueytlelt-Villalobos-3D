import NoticiaEstelar from '../components/organisms/NoticiaEstelar';
import NoticiaSemanal from '../components/organisms/NoticiaSemanal';
import DatosCuriosos from '../components/organisms/DatosCuriosos';
import Footer from '../components/organisms/Footer';
import './Home.css'
import Encabezado from '../components/organisms/Encabezado';

function Home(){
        return (
            <>
            <Encabezado />
            <div id="colorFondo">
                <br />
                <NoticiaEstelar />
                <br />
                <NoticiaSemanal />
                <br />
                <DatosCuriosos />
                <br />
                <Footer />
            </div>
            </>
        )
    }

export default Home;