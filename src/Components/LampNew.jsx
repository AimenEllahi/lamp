/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 LampNew.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from "leva";

export function LampNew(props) {
  const { nodes, materials } = useGLTF('/Models/LampNew-transformed.glb')
  const { position, rotation, scale } = useControls("Lamp", {
    position: {
      value: [0, -3, -3.600000000000001],
      step: 0.1,
    }, //{"position":}
    rotation: {
      value: [0.28, 0, 0],
      step: 0.01,
    },
    scale: { value: 0.29, step: 0.01 },
  });
  return (
    <group
     position={position}
     rotation={rotation}
     scale={scale} 
     {...props} dispose={null}>
        <pointLight />
      <mesh receiveShadow castShadow geometry={nodes.Cube4.geometry} 
      material={nodes.Cube4.material}
       position={[2.225, 15.496, 11.583]} scale={[2, 1, 1]} />
      <mesh receiveShadow castShadow geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
      <mesh receiveShadow castShadow geometry={nodes.Cylinder1_0.geometry} material={materials['bracket.1']} position={[1.876, 22.636, -1.876]} rotation={[0, -Math.PI / 4, 0]} />
      <mesh receiveShadow castShadow geometry={nodes.Cylinder1.geometry} material={materials.bracket} position={[1.876, 23.954, -1.876]} rotation={[0, -Math.PI / 4, 0]} />
      <mesh receiveShadow castShadow geometry={nodes.Main.geometry} material={materials['white in']} position={[0, 21, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh receiveShadow castShadow geometry={nodes.BooleMain.geometry} material={materials.glass} position={[0, 20.997, 0]} />
      <mesh receiveShadow castShadow geometry={nodes.Tube1.geometry} material={materials.main} position={[0, 21, 0]} />
      <mesh receiveShadow castShadow geometry={nodes.TVin.geometry} material={materials.screen} position={[0, 20.77, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh receiveShadow castShadow geometry={nodes.TVout.geometry} material={materials['black plast']} position={[0, 20.853, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh receiveShadow castShadow geometry={nodes.objArmchai.geometry} material={materials.chair} position={[2.561, 10.318, 3.866]} rotation={[-0.089, -1.571, 0]} scale={20} />
      <mesh receiveShadow castShadow geometry={nodes.objArmcha0.geometry} material={materials.chair} position={[-11.084, 4.275, 101.154]} rotation={[0, -Math.PI / 2, 0]} scale={20} />
    </group>
  )
}

useGLTF.preload('/LampNew-transformed.glb')