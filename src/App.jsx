import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListConteiner from './components/ItemListContainer'

function App() {
  

  return (
    <>
    <Navbar />
    <ItemListConteiner saludo="Hola!" />
    
    </>
  )
}

export default App
