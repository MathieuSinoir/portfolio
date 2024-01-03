import './App.css'
import Navbar from './component/Navbar'
import Body from './component/Body'
import Competences from './component/Competences'
import './styles/Navbarcss.css'
import './styles/Bodycss.css'
import './styles/Competencescss.css';



function App() {


  return (
    <>
      <header>
        <Navbar />
        <Body />
        <Competences />

      </header>


    </>
  )
}

export default App
