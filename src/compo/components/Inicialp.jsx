import React from 'react'
import './Inicialp.css'
import { Link } from 'react-router-dom'
import inici from '../../img/inicial.jpg'
const Inicialp = () => {
  return (
    <>
        <div className="nivel-inicial">
            <section className="hero">
                <img src={inici} alt="Nivel Inicial" className="hero-img" />
                <div className="hero-text">
                    <h1>Nivel Inicial</h1>
                    <p>Hacia una escuela inclusiva, educando en valores.</p>
                </div>
            </section>

            <section className="descripcion">
                <h2>Bienvenidos al Nivel Inicial</h2>
                <p>El Nivel Inicial es el primer paso hacia el desarrollo integral de los niños. En nuestra institución, nos enfocamos en brindar un entorno de aprendizaje seguro, inclusivo y enriquecedor. Promovemos valores fundamentales como la colaboración, el respeto y la empatía, esenciales para el crecimiento social y emocional de los niños.</p>
                <p>Ofrecemos una educación innovadora que fomenta la creatividad, la curiosidad y el amor por el aprendizaje, con el objetivo de acompañar a cada niño en su proceso de crecimiento y desarrollo.</p>
            </section>

            <section className="objetivos">
                <h3>Objetivos del Nivel Inicial</h3>
                <ul>
                    <li>Fomentar el desarrollo emocional y social de los niños.</li>
                    <li>Establecer una base sólida de habilidades cognitivas y motrices.</li>
                    <li>Promover la inclusión, respetando la diversidad y las diferencias individuales.</li>
                    <li>Potenciar la curiosidad natural de los niños, estimulando su creatividad y expresión.</li>
                    <li>Ofrecer un espacio de aprendizaje seguro, afectuoso y estimulante.</li>
                </ul>
            </section>

            <section className="actividades">
                <h3>Actividades y Enfoque Educativo</h3>
                <p>Las actividades que realizamos en el Nivel Inicial están diseñadas para apoyar el desarrollo cognitivo, social y emocional de los niños, a través de métodos lúdicos y dinámicos. Algunas de las actividades incluyen:</p>
                <ul>
                    <li>Juegos y actividades que fomentan el trabajo en equipo.</li>
                    <li>Rondas de lectura para promover el amor por los libros y el lenguaje.</li>
                    <li>Arte y expresión para desarrollar la creatividad.</li>
                    <li>Actividades físicas para mejorar la coordinación motriz.</li>
                </ul>
            </section>

            <section className="contacto">
                <h3>Contacta con Nosotros</h3>
                <p>Si deseas obtener más información sobre el Nivel Inicial, puedes ponerte en contacto con nosotros para resolver tus dudas o para programar una visita.</p>
                <div className='btn-container'>
                    <button className="btn-contacto">Contacta con nosotros</button>
                    <button className="btn-home"><Link to="/"> Ir a home</Link></button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Inicialp