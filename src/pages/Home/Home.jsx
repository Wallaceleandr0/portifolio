import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Main from "../../components/Main/Main"
import "./Home.css"

function Home() {
  return (
    <div className="Home">
        <Header />
        <Banner />
        <Main />
    </div>
  )
}

export default Home