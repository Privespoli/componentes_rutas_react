import { useState } from 'react';
import Form from './components/forms/Form';
import Foto from './components/foto';
import Header from './components/Header';

function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <Foto />
      <Header />
      <Form />
    </div>
  );
}

export default App;
