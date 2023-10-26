import About from "../About/About"
import Technologies from "../Technologies/Technologies"
import Projects from "../Projects/Projects"
import "./Main.css"

function Main() {
  return (
    <div className="Main">
        <About />
        <Technologies />
        <Projects />
    </div>
  )
}

export default Main