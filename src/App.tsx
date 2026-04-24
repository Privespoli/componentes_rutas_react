import { useState } from 'react';
import Form from './components/forms/Form';
import Foto from './components/foto';
import Header from './components/Header';
import Bio from './components/Bio'; // Importamos el nuevo componente

function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <Foto />
      <Header />
      <Bio /> {/* Lo agregamos aquí */}
      <Form />
    </div>
  );
}

export default App;