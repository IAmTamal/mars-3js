import { useThree } from '@react-three/fiber';
import React, { useEffect } from 'react'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const Sphere1 = () => {

    const { camera, gl } = useThree();
    useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);
            controls.minDistance = 3;
            controls.maxDistance = 20;
            return () => {
                controls.dispose();
            };
        },
        [camera, gl]
    );
    return (
        <mesh rotation={[90, 0, 20]}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />

            <meshStandardMaterial color='hotpink' />
        </mesh>
    )
}

export default Sphere1