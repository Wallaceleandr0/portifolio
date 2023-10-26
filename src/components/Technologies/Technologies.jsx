import React from 'react'
import './Technologies.css'
import { useState, useEffect } from 'react'

function Technologies() {

    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('./infoTec.json')
        .then((response) => response.json())
        .then((data) => setInfo(data))
        .catch((error) => console.error(error))
    },[])

  return (
    <div className='Technologies'>
        <h2>Tecnologias</h2>
        <div className="Technologies-img">
        {info.map((item) => (
            <div>
            <p>{item.title}</p>
            <img src={item.img} alt="" />
            </div>
        ))}
        </div>
    </div>
  )
}

export default Technologies