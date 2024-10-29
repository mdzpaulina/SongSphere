import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon from './icon.png';
import './Home.css';

function Home() {
  const navigate = useNavigate(); // Hook de navegación

  const goToSecondPage = () => {
    navigate('/second'); // Redirige a la segunda página
  };

  return (
    <div className='contitulo'>
      <img src={icon} alt='icon' className='icon'/>
      <h1>SongSphere</h1>
      <h2>Feel the music with your friends</h2>
      <button onClick={goToSecondPage}>Start the experience</button> {/* Botón para navegar */}
    </div>
  );
}

export default Home;
