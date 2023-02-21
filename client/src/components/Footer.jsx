import React from 'react'
import Logo from "../img/CGEC.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={Logo} alt="" width="120" />
      <div className='description'>
        <span>Diretoria de Ensino de Cibernética</span>
        <span>Clube de Guerra Eletrônica e Cibernética</span>
        <span>21/227 Nanni dev.status = in progress ...</span>
      </div>
    </footer>
  )
}

export default Footer