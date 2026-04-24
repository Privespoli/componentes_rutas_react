import React from 'react';

function Bio() {
  return (
    <div style={{ 
      backgroundColor: '#f9f9f9', 
      padding: '15px', 
      borderRadius: '8px', 
      color: '#333',
      margin: '20px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginTop: 0 }}>Sobre mí</h3>
      <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
        <strong>Ubicación:</strong> Barcelona, España<br />
        <strong>Rol:</strong> Estudiante de Programación<br />
        <strong>Intereses:</strong> Ciberseguridad
      </p>
    </div>
  );
}

export default Bio;