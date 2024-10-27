import './App.css'
import React from 'react';
import icon from './icon.png';

function app(){
  return (
    <div className='contitulo'>
      <img src={icon} alt='icon' className='icon'/>
      <h1>SongSphere</h1>
      <h2>La Web para la comodidad de tus oidos.</h2>
    </div>
  );
}

export default app;