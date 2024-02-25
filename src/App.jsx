import About from "./Components/About"
import Cards from "./Components/Cards"
import Eyes from "./Components/Eyes"
import Feature from "./Components/Feature"
import Footer from "./Components/Footer"
import Landing from "./Components/Landing"
import Marquee from "./Components/Marquee"
import Navbar from "./Components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';
import Testimonials from "./Components/Testimonials"



function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900 '>
    <h1 className='sm:block text-white px-5 py-5 text-center bg-red-500 md:hidden lg:hidden'>This Website is made for Bigger Screens Use Desktop or Laptop for Better Viewing Experiance</h1>
    <Navbar/>
    <Landing/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Feature/>
    <Testimonials/>
    <Cards/>
    <Footer/>
  </div>
  )
}

export default App