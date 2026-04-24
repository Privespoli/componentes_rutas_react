import React from 'react';

function Foto() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpY8I8e5tMyybePru9bXabRpcLHuI2t08J2A&s" 
        alt="Foto de perfil" 
        style={{ 
          borderRadius: '50%', // Hace la imagen circular
          width: '150px',       // Ajusta el ancho
          height: '150px',      // Ajusta el alto (igual al ancho para que sea un círculo perfecto)
          objectFit: 'cover',   // Asegura que la imagen no se estire feo
          border: '4px solid #6ac2df' // Un borde opcional para que resalte
        }} 
      />
    </div>
  );
}

export default Foto;