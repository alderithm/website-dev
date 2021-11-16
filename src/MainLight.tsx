import { useHelper } from "@react-three/drei";
import React, { useRef } from 'react'
import { DirectionalLightHelper, PointLightHelper } from "three";

export default function MainLight() {
    const ref = useRef();
    useHelper(ref, PointLightHelper, 1);

    return (
        <>
            <pointLight
                ref={ref}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                castShadow
                shadowBias={-0.005}
                position={[ 100, 300, 0]}
                scale={10}
                intensity={0.4}
            />
            <ambientLight 
                intensity={0.4}    
            />
        </>
    )
}