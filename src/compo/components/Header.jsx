import React from 'react'
import './Header.css'
const Header = (props) => {
  return (
    <>
        <header className="header">
            <img src={props.imagenk} className="logo" />
            <h1>COLEGIO ALTERNATIVO</h1>
            <p>COLEGIO ALTERNATIVO PRUEBA</p>
        </header>
    </>
  )
}

export default Header