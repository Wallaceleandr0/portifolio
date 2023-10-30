import About from "../About/About"
import Technologies from "../Technologies/Technologies"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import "./Main.css"

function Main() {
  return (
    <div className="Main">
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <footer><a href="https://github.com/Wallaceleandr0" target="_blank"><p>Wallace Leandro</p> <img src="media-social/github.png" alt="" /></a></footer>
    </div>
  )
}

export default Main