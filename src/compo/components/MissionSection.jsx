import React from 'react'
import './MissionSection.css'
import iconoObjetivos from '../../img/icono-objetivos-home.png';
import iconoNiveles from '../../img/icono-niveles-home.png';

const MissionSection = () => {
  return (
    <>
        <div className="mission-section">
            <div className="mission-quote">
                <p>"Comprometidos con la sociedad y sus necesidades sociales, culturales y espirituales, 
                    a partir de la educación como herramienta de transformación."</p>
            </div>
            <div className="mission-content">
                <div className="mission-objective">
                <div className="icon-container">
                    <img src={iconoObjetivos} alt="Objetivos" className="icon" />
                </div>
                <h3>OBJETIVOS</h3>
                <p>Entendemos que el soporte de la fe cristiana aporta los valores morales y espirituales que necesita nuestra sociedad,
                    y concebimos a la educaion como una herramienta de transformación humana y social idonea para lograr ese proposito.
                </p>
                </div>
                <div className="mission-levels">
                <div className="icon-container">
                    <img src={iconoNiveles} alt="Niveles" className="icon" />
                </div>
                <h3>NIVELES</h3>
                <p>Desde los más pequeños -NIVEL INICIAL- nos orientamos "hacia una escuela inclusiva,
                    que educa en valores", a los mas grandes-PRIMARIO y SECUNDARIO-los formatos "para 
                    pensar, pensar para actuar y actuar para transformar". El nivel C.E.N.S. promueve la 
                    terminalidad de los estudios secundarios para insertarse en el campo laboral o continuar
                    los estudios universitarios.
                </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default MissionSection