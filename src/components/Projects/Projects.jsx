import './Projects.css'
import { useState, useEffect } from 'react'

function Projects() {

  const [ infoProject, setInfoProject ] = useState([])

  useEffect(() => {
    fetch("./projects.json")
    .then((response) => response.json())
    .then((data) => setInfoProject(data))
    .catch((error) => console.error(`Deu ruim a requisição do projects.json: ${error}`))
  },[])

  return (
    <section className='Projects'id='project'>
      <div className="Projects-line"></div>
      <h2>Meus Projetos</h2>
      <section className="Projects-container">
          {infoProject.map((item, index) => (
            <a href={item.link} target='_blank' key={index} className="Projects-container-project" style={{backgroundImage: `url(${item.img})`}}>
              <div className="Projects-container-project-bg-black"></div>
            </a>
          ))}
      </section>  
    </section>
  )
}

export default Projects