import React from 'react'
import Header from '../compo/components/Header'
import Hero from '../compo/components/Hero'
import Nav from '../compo/components/Nav'
import Footer from '../compo/components/Footer'
import MissionSection from '../compo/components/MissionSection'
import escudo from '../img/escudo 1.png'

const Home = () => {
  return (
    <>
        <Header imagenk={escudo}></Header>
        <Hero ></Hero>
        <Nav></Nav>
        <MissionSection></MissionSection>
        <Footer></Footer>
    </>
  )
}

export default Home