
import './App.css'
import Header from './componets/Header'
import 'remixicon/fonts/remixicon.css'
import Hero from './componets/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'

function App() {
 
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
    <div className='container'>
    <Header />
    <Hero />

    </div>
    </>
  )
}

export default App
