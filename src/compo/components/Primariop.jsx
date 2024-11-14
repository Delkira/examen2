import React from 'react'
import './Primariop.css'
import primar from '../../img/primaria.jpg'
import { Link } from 'react-router-dom'
const Primariop = () => {
  return (
    <>
        <div className="nivel-primario">
            <section className="hero">
                <img src={primar} alt="Nivel Primario" className="hero-img" />
                <div className="hero-text">
                    <h1>Nivel Primario</h1>
                    <p>Formación integral para niños con valores y conocimiento.</p>
                </div>
            </section>

            <section className="descripcion">
                <h2>Bienvenidos al Nivel Primario</h2>
                <p>En el Nivel Primario, nuestro objetivo es proporcionar una educación completa que promueva el desarrollo académico, personal y social de cada niño. Fomentamos un ambiente de aprendizaje inclusivo, donde cada estudiante pueda desarrollarse a su propio ritmo, adquiriendo las habilidades necesarias para su futuro.</p>
                <p>Preparamos a nuestros alumnos para enfrentar los desafíos del mundo moderno, promoviendo la curiosidad, la creatividad y el trabajo en equipo en un entorno que valora tanto el conocimiento como los valores humanos.</p>
            </section>

            <section className="objetivos">
                <h3>Objetivos del Nivel Primario</h3>
                <ul>
                    <li>Desarrollar habilidades académicas fundamentales como lectura, escritura y matemáticas.</li>
                    <li>Fomentar el desarrollo de habilidades sociales y emocionales.</li>
                    <li>Promover la creatividad y el pensamiento crítico.</li>
                    <li>Incluir principios éticos y valores cristianos en todas las actividades educativas.</li>
                    <li>Preparar a los niños para una transición exitosa hacia la educación secundaria.</li>
                </ul>
            </section>

            <section className="actividades">
                <h3>Actividades y Enfoque Educativo</h3>
                <p>El enfoque educativo del Nivel Primario se basa en el aprendizaje activo, con el fin de involucrar a los estudiantes en su propio proceso educativo. Algunas de las actividades incluyen:</p>
                <ul>
                    <li>Lecciones interactivas en matemáticas, ciencias y lenguaje.</li>
                    <li>Proyectos en grupo que fomentan el trabajo en equipo.</li>
                    <li>Juegos educativos que desarrollan habilidades cognitivas y motoras.</li>
                    <li>Actividades extracurriculares que refuerzan valores como el liderazgo y la responsabilidad.</li>
                </ul>
            </section>

            <section className="contacto">
                <h3>Contacta con Nosotros</h3>
                <p>Si deseas obtener más información sobre el Nivel Primario, no dudes en ponerte en contacto con nosotros para resolver cualquier duda o para organizar una visita.</p>
                <div className='btn-container'>
                    <button className="btn-contacto">Contacta con nosotros</button>
                    <button className="btn-home"><Link to="/"> Ir a home</Link></button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Primariop