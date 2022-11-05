import { Canvas } from '@react-three/fiber'
import React from 'react'
import Sphere1 from './components/Sphere1'
import "./App.css"
import { Environment, useEnvironment } from '@react-three/drei'



const App = () => {

  const outerspace = useEnvironment({ files: "/src/assets/nebula.hdr" })

  return (
    <Canvas className='main_canvas'>

      <ambientLight intensity={0.8} />
      {/* <directionalLight position={[-2, 1, 0.8]} intensity={0.6} /> */}

      <Environment map={outerspace} background />

      <Sphere1 />
    </Canvas>
  )
}

export default App