import React from 'react';
import Tilt from 'react-tilt'
import './logo.css'
import detect from './detect.png'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 40, transition: true }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3"><img className='logo-image' alt='logo' src={detect}/></div>
      </Tilt>
    </div>
  );
};

export default Logo;