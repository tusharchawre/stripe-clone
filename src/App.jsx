import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { LogoSlabs } from './components/LogoSlabs'
import CardCrate from './components/CardCrate'
import { GlobeCase } from './components/globe-case'
import CardCrate2 from './components/CardCrate2'

function App() {




  return (
    <>
    <div>
       <Navbar />
       <Hero />
       <LogoSlabs />
      <CardCrate />
      <GlobeCase />
      <CardCrate2 />

    </div>
    </>
  )
}

export default App