import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
        <footer>
            <div className="union">
                <div className="contacto">
                <p>Nivel Inicial - Sala 3, 4 y 5 - Turno Mañana</p>
                <p>Nivel Inicial - Sala 4 y 5 - Turno Tarde</p>
                <p>Nivel Primario - 1° a 7° - Turno Mañana</p>
                <p>Nivel Secundario / CENS</p>
                <p>Av. Ejemplo 1234, Ciudad de Potosí</p>
                <p>Teléfono: (591) 622-4568</p>
                <p>Administración: (591) 733-3346 (WhatsApp)</p>
                <p>Personería: 512/88</p>
                </div>
                <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18..." allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
            <div className="menu">
                <h2>Menú</h2>
                <ul>
                <li><a href="#">Página principal</a></li>
                <li>
                    <a href="#">Institucional</a>
                    <ul>
                    <li><a href="#">Propósitos</a></li>
                    <li><a href="#">Objetivos institucionales</a></li>
                    <li><a href="#">Reseña histórica</a></li>
                    </ul>
                </li>
                <li><a href="#">Galería de fotos</a></li>
                <li><a href="#">Inscripciones 2021</a></li>
                <li><a href="#">Cuotas 2021</a></li>
                <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer