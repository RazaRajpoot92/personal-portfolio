
import './App.css'
import Header from './componets/Header'
import 'remixicon/fonts/remixicon.css'
import Hero from './componets/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'
import Services from './componets/Services'
import Portfolio from './componets/Portfolio'
import Contact from './componets/Contact'
import Footer from './componets/Footer'

function App() {
 
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
    <div className='container'>
    <Header />
    <Hero />
    <Services />
    <Portfolio />
    <Contact />
    </div>
    <Footer />
    </>
  )
}

export default App
