import React from "react";

import './css/Header.css'

const Header = () => {
  return (
    <header className="Header">
      <h3 className='Header__logo'>LOGO</h3>
      <nav className='Header__nav'>
        <ul>
          <li>Hola</li>
          <li>proyectos</li>
          <li>hablemos</li>
        </ul>
      </nav>
      <button className="Header__cv">
        descargar currículum
      </button>
    </header>
  );
};

export default Header;
