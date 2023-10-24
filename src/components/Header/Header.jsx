import "./Header.css"
import { useState, useEffect } from "react"

function Header() {

// Quando clicar no Header-menu disparar uma funcao para guardar um novo state

  const [visibilityList, setVisibilityList] = useState(false)

  useEffect(() => {
    const checkWidth  = () => {
      if(window.innerWidth < 650) {
        setVisibilityList(false)
      } else {
        setVisibilityList(true)
      }
    }

    checkWidth()

    return () => {
      window.addEventListener("resize", checkWidth)
    }

  },[])

  const triggerFunction = () => {
    if(window.innerWidth < 650) {
      setVisibilityList(!visibilityList)
    }
  }

  return (
    <header className="Header">
        <div className="Header-logo">
            <div className="Header-img-a">
              <img src="logo192.png" alt="logo" />
              <a href="#">Wallace.JSX</a>
            </div>
            <div className="Header-menu" onClick={triggerFunction}>
              <div className="line-menu" ></div>
              <div className="line-menu"></div>
              <div className="line-menu"></div>
            </div>
        </div>
        <ul className="Header-ul" style={{display: visibilityList ? "flex" : "none"}}>
            <li><a href="#" onClick={triggerFunction}>about</a></li>
            <li><a href="#" onClick={triggerFunction}>contact</a></li>
            <li><a href="#" onClick={triggerFunction}>projects</a></li>
        </ul>
    </header>
  )
}

export default Header