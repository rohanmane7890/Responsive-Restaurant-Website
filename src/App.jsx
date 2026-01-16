
import './App.css'
import About from './Components/About/About'
import Amenities from './Components/Amenities/Amenities'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Rooms from './Components/Rooms/Room'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonials/Testimonial'

function App() {

  return (
    <>
    <Nav/>
    <Header/>
    <About/>
    <Services/>
    <Rooms/> 
    <Amenities/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App
