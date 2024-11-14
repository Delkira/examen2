import React from 'react'
import './Hero.css'
import fondo1 from '../../img/slider-nivel-inicial.jpg'
import { Link } from 'react-router-dom'
const Hero = (props) => {
  return (
    <>
      <div className="hero">
        <img src={fondo1} alt="fondo1" />
        <h1>Nivel Inicial</h1>
        <p>Hacia una Escuela Inclusiva,</p>
        <p>educando en valores.</p>
        <div className="caja">
          <div className="btn1">
            <span className="ti"><Link to="/ini">Nivel Inicial</Link></span>
            <br />
            <span className="sub">Educando en valores</span>
          </div>
          <div className="btn1">
            <span className="ti"><Link to="/pri">Nivel Primario</Link></span>
            <br />
            <span className="sub">Educando en valores</span>
          </div>
          <div className="btn1">
            <span className="ti"><Link to="/secu">Nivel Secundario</Link></span>
            <br />
            <span className="sub">Educando para pensar</span>
          </div>
          <div className="btn1">
            <span className="ti"><Link to="/ce">Nivel C.E.N.S.</Link></span>
            <br />
            <span className="sub">Terminar los estudios secundarios</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero