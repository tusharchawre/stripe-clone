import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { LogoSlabs } from './components/LogoSlabs'
import CardCrate from './components/CardCrate'

function App() {




  return (
    <>
    <div>
       <Navbar />
       <Hero />
       <LogoSlabs />
      <CardCrate />
    </div>
    </>
  )
}

export default App