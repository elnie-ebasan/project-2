import React from 'react'
import './MensaheHero.css'
import Image from '../UI-images/imahe.jpg'

const MensaheHero = () => {
  return (
    <div className='hero'>
      <img src={Image} alt="hero" style={{width: '350px'}}/>
      <h2>mensahe</h2>
    </div>
    
  )
}

export default MensaheHero
