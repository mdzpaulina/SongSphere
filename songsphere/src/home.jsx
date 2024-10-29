import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Hook de navegación

  const goToSecondPage = () => {
    navigate('/second'); // Redirige a la segunda página
  };

  return (
    <div>
      <h1>Hola Mundo</h1>
      <button onClick={goToSecondPage}>Ir a la segunda página</button> {/* Botón para navegar */}
    </div>
  );
}

export default Home;
