import React from 'react'
import escudo from '../img/escudo 1.png'
import Header from '../compo/components/Header'
import Primariop from '../compo/components/Primariop'

const Primario = () => {
  return (
    <>
        <Header imagenk={escudo}></Header>
        <Primariop></Primariop>
    </>
  )
}

export default Primario