import React from 'react'
import './Censp.css'
import cen from '../../img/cens.jpg'
import { Link } from 'react-router-dom'
const Censp = () => {
  return (
    <>
        <div className="cens">
            <section className="hero">
                <img src={cen} alt="C.E.N.S." className="hero-img" />
                <div className="hero-text">
                    <h1>C.E.N.S. - Centro de Educación Secundaria para Adultos</h1>
                    <p>Recuperación de la Educación Secundaria para Adultos con un enfoque inclusivo y flexible.</p>
                </div>
            </section>

            <section className="descripcion">
                <h2>Bienvenidos al C.E.N.S.</h2>
                <p>El Centro de Educación Secundaria para Adultos (C.E.N.S.) está destinado a aquellas personas que no han podido completar su educación secundaria en su edad regular. En nuestro C.E.N.S., ofrecemos una educación flexible, adaptada a las necesidades de los adultos, con la finalidad de recuperar y fortalecer los conocimientos necesarios para poder insertarse al ámbito laboral o continuar con estudios superiores.</p>
            </section>

            <section className="objetivos">
                <h3>Objetivos del C.E.N.S.</h3>
                <ul>
                    <li>Brindar una educación de calidad para adultos, respetando sus tiempos y necesidades.</li>
                    <li>Fomentar el desarrollo personal y profesional de los estudiantes, mejorando sus oportunidades laborales.</li>
                    <li>Promover la inclusión social mediante la educación, permitiendo a los adultos concluir sus estudios secundarios.</li>
                    <li>Preparar a los estudiantes para acceder a la educación terciaria o para el mundo laboral.</li>
                </ul>
            </section>

            <section className="metodologia">
                <h3>Metodología Flexible y Adaptativa</h3>
                <p>La metodología del C.E.N.S. está diseñada para ofrecer a cada estudiante el apoyo necesario para que pueda avanzar a su propio ritmo. La modalidad de estudio es flexible, con opciones tanto presenciales como a distancia. Además, se fomenta el uso de nuevas tecnologías para facilitar el aprendizaje y la interacción.</p>
            </section>

            <section className="contacto">
                <h3>Contacta con Nosotros</h3>
                <p>Si estás interesado en retomar tus estudios o deseas más información sobre el C.E.N.S., estamos aquí para ayudarte. Contáctanos y te brindaremos toda la información que necesites.</p>
                <div className='btn-container'>
                    <button className="btn-contacto">Contacta con nosotros</button>
                    <button className="btn-home"><Link to="/"> Ir a home</Link></button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Censp