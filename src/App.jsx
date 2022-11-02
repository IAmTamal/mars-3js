import { Canvas } from '@react-three/fiber'
import React from 'react'
import Sphere1 from './components/Sphere1'
import "./App.css"



const App = () => {

  return (
    <Canvas className='main_canvas'>

      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} />



      <Sphere1 />
    </Canvas>
  )
}

export default App