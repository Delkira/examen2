import React, { useState } from 'react'
import './Nav.css'
const Nav = () => {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button class='bx bx-menu' id="btnAb"  onClick={() => setIsVisible(!isVisible)}> Menu</button>
    <nav class={`nav1 ${isVisible ? 'visible' : ''}`} id="nav1">
        <ul class="navList">
            <li>
                <a href="#">Principal</a>
            </li>
            <li>
                <a href="#">Institucional</a>
            </li>
            <li>
                <a href="#">Fotos</a>
            </li>
            <li>
                <a href="#">Inscripciones 2021</a>
            </li>
            <li>
                <a href="#">Cuotas 2021</a>
            </li>
            <li>
                <a href="#">Contacto</a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Nav