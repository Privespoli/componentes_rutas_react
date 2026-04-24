
import Foto from './components/foto';
import Header from './components/Header';
import Bio from './components/Bio'; // Importamos el nuevo componente
import { Link, Outlet } from "react-router";


function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>

      <nav>
        <Link
        to="/contact"
        >Contactanos</Link>
<p></p>
        <Link
        to="/hijo"
        >Hijo</Link>
      </nav>
     
      <Outlet />
      <Foto />
      <Header />
      <Bio />
      
    </div>

    
  );
}

export default App;