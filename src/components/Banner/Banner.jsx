import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='Banner'>
      <img src="wallace-logo.jpg" alt="foto-wallace" id='logo-me' />
      <h3><span>&lt;</span>WallaceLeandro <span>/&gt;</span></h3>
      <p>Software Enginner | Fullstack</p>
      <div className="Banner-box-img">
        <img src="logo192.png" id='react' />
        <img src="node.png" id='node-logo' />
      </div>
    </div>
  )
}

export default Banner