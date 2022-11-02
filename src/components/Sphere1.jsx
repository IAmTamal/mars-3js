import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import texture from "../assets/map.jpg"
import { Environment, Sphere } from '@react-three/drei';
const Sphere1 = () => {

    const { camera, gl } = useThree();
    useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);
            controls.minDistance = 3;
            controls.maxDistance = 20;
            controls.enableZoom = false;
            controls.autoRotate = true;
            controls.enableDamping = true;
            controls.dampingFactor = 0.5;
            controls.rotateSpeed = 0.4;
            controls.panSpeed = 0.4;

            return () => {

                controls.dispose();
            };
        },
        [camera, gl]
    );

    const texture1 = useLoader(TextureLoader, texture);

    const marsRef = useRef();

    useFrame(() => {

        marsRef.current.rotation.y += 0.001;

    })

    return (
        <mesh ref={marsRef} >
            <sphereGeometry args={[2.5, 32, 32]} />

            {/* <meshStandardMaterial map={texture1} /> */}
            <meshPhongMaterial map={texture1} />
        </mesh>




        // <Sphere args={[1, 100, 200]} scale={2.5} ref={marsRef}>
        //     <meshStandardMaterial map={texture1} />
        // </Sphere>
    )
}

export default Sphere1