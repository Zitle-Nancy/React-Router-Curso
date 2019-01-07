import React from 'react';
import './contacto.css';

const Contacto = () => {
  return(
    <section className="contacto">
      <h1 className='contactame'> Contáctame: </h1>
      <p className="introduccion">¡Hola! Mi nombre es Nancy Zitle y soy Developer Front End &
         Ingeniera en Computación.
      </p>
      <a href='https://zitle-nancy.github.io/' 
         target="_blank">
        <i class="devicon-chrome-plain-wordmark dev-icon"/>
      </a>
      <a href='https://github.com/Zitle-Nancy?tab=repositories' 
         target="_blank">
        <i className="devicon-github-plain-wordmark dev-icon"/>
      </a>
      <a href='https://github.com/Zitle-Nancy?tab=repositories' 
         target="_blank">
        <i class="devicon-twitter-plain colored dev-icon" />
      </a>
    </section>
  )
}

export default Contacto;