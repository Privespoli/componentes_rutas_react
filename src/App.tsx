import { useState } from 'react';
import Form from './components/forms/Form';
import Foto from './components/foto';
import Header from './components/Header';
import Bio from './components/Bio'; // Importamos el nuevo componente
import Hermano from "./components/Hermano";


function App() {
  const titulo="Priscila"
  const [numero, setNumero] = useState<number>(0);
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <Foto />
      <Header />
      <Bio />
      <h1>Titulo</h1>
      <Form  nombre={titulo}/>
      <button>Enviar</button>
      <h1>contador: {numero}</h1>
      <Hermano numeros={numero} titulo={titulo} setNumero={setNumero} />
    </div>
  );
}

export default App;