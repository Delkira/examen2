import React from 'react'
import './Secundaria.css'
import secun from '../../img/secundaria.jpg'
import { Link } from 'react-router-dom'

const Secundariap = () => {
  return (
    <>
        <div className="nivel-secundario">
            <section className="hero">
                <img src={secun} alt="Nivel Secundario" className="hero-img" />
                <div className="hero-text">
                    <h1>Nivel Secundario</h1>
                    <p>Formación integral para los adolescentes, con énfasis en el desarrollo académico y personal.</p>
                </div>
            </section>

            <section className="descripcion">
                <h2>Bienvenidos al Nivel Secundario</h2>
                <p>En el Nivel Secundario, nuestro compromiso es brindar a los estudiantes una formación integral, enfocada tanto en el conocimiento académico como en el desarrollo de habilidades sociales, emocionales y éticas, para prepararlos para la vida adulta y la educación superior.</p>
                <p>El Nivel Secundario no solo prepara a los estudiantes para enfrentar los desafíos académicos, sino que también promueve el pensamiento crítico, la independencia y el respeto por los demás.</p>
            </section>

            <section className="objetivos">
                <h3>Objetivos del Nivel Secundario</h3>
                <ul>
                    <li>Desarrollar competencias en las áreas académicas básicas: matemáticas, ciencias, literatura, entre otras.</li>
                    <li>Fomentar el pensamiento crítico, la resolución de problemas y la autonomía.</li>
                    <li>Promover valores éticos, cristianos y humanos en el proceso educativo.</li>
                    <li>Prepara a los estudiantes para la educación terciaria o el mundo laboral.</li>
                </ul>
            </section>

            <section className="actividades">
                <h3>Actividades y Enfoque Educativo</h3>
                <p>En el Nivel Secundario, buscamos que los estudiantes tengan una experiencia educativa completa. Algunas de las actividades incluyen:</p>
                <ul>
                    <li>Proyectos interdisciplinarios que favorecen el trabajo en equipo.</li>
                    <li>Clases interactivas que promueven el aprendizaje autónomo y en grupo.</li>
                    <li>Participación en debates y actividades extracurriculares para desarrollar habilidades sociales y de liderazgo.</li>
                    <li>Preparación para exámenes y pruebas de acceso a la educación superior.</li>
                </ul>
            </section>

            <section className="contacto">
                <h3>Contacta con Nosotros</h3>
                <p>Si deseas obtener más información sobre el Nivel Secundario, estamos a tu disposición para responder tus dudas y organizar una visita guiada.</p>
                <div className='btn-container'>
                    <button className="btn-contacto">Contacta con nosotros</button>
                    <button className="btn-home"><Link to="/"> Ir a home</Link></button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Secundariap