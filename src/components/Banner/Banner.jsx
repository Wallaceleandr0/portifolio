import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='Banner'>
      <img src="https://d30br0w1c4bdt2.cloudfront.net/wp-content/uploads/2015/10/placeholder.jpg" alt="foto-wallace" />
      <h3><span>&lt;</span>WallaceLeandro <span>/&gt;</span></h3>
      <p>Software Enginner | Fullstack</p>
      <div className="Banner-box-img">
        <img src="logo192.png" id='react' alt="" />
        <img src="node.png" alt="" />
      </div>
    </div>
  )
}

export default Banner