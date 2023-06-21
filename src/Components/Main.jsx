import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useControls } from "leva";
import {
  OrbitControls,
  useProgress,
  Html,
  Environment,
  PresentationControls,
  SpotLight,
} from "@react-three/drei";
import { Lamp } from "./Lamp";
import { MeshBasicMaterial } from "three";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html style={{ color: "black", marginTop: "22vw", marginLeft: "48vw" }}>
      {progress} % loaded
    </Html>
  );
};

export default function Index() {
  const {
    position,
    rotation,
    radiusTop,
    radiusBottom,
    pnumber,
    distance,
    angle,
    attenuation,
    anglePower,
    intensity,
    opacity,
  } = useControls("SpotLight", {
    position: {
      value: [0, 2.3, 1],
      step: 0.1,
    },
    rotation: { value: [0, 0, 0], step: 0.1 },
    scale: { value: 1, step: 0.01 },
    radiusTop: { value: 1.38, step: 0.01 },
    radiusBottom: { value: 40, step: 0.01 },
    pnumber: { value: 0.8, step: 0.1 },
    distance: { value: 30, step: 1 },
    angle: { value: 0.8, step: 0.1 },
    attenuation: { value: 20, step: 1 },
    anglePower: { value: 5, step: 0.1 },
    intensity: { value: 1, step: 0.1 },
    opacity: { value: 0.5, step: 0.1 },
  });

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#000" }}>
      <Canvas shadows>
        {/*  */}
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        {/*
        <spotLight position={[10, 15, 10]} angle={0.3} /> */}
        <Suspense fallback={<Loader />}>
          {/* <directionalLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} /> */}
          <SpotLight
            castShadow
            position={[0, 1.9, 1]}
            rotation={rotation}
            penumbra={0.8}
            radiusTop={0.94}
            radiusBottom={40}
            distance={30}
            angle={0.8}
            attenuation={20}
            anglePower={5}
            intensity={110}
            opacity={0.3}
            color={"#ffffff"}
          />
          <SpotLight
            castShadow
            receiveShadow
            position={position}
            rotation={rotation}
            penumbra={pnumber}
            radiusTop={radiusTop}
            radiusBottom={radiusBottom}
            distance={-50}
            angle={angle}
            attenuation={attenuation}
            anglePower={anglePower}
            intensity={intensity}
            opacity={opacity}
            color={"#fffffff"}
          />
          <Lamp />

          {/* <mesh
            position={position}
            rotation={[Math.PI / 2, 0, 0]}
            receiveShadow
          >
            <circleGeometry args={[65]} />
            <meshBasicMaterial
              color='#2e3233'
              blur={[900, 900]}
              resolution={1024}
              mixBlur={1}
              mixStrength={3}
              depthScale={1}
              minDepthThreshold={0.85}
              receiveShadow
              castShadow
            />
          </mesh> */}
          {/* <mesh
            position={position}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[1000, 800]} />
            <meshStandardMaterial color='#221f1f' receiveShadow />
          </mesh> */}
          {/* <mesh position={position} rotation={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[400, 200]} />
            <MeshReflectorMaterial
              color='#221f1f'
              blur={[900, 900]}
              resolution={1024}
              mixBlur={1}
              mixStrength={3}
              depthScale={1}
              minDepthThreshold={0.85}
              metalness={1}
              roughness={0.1}
              receiveShadow
              castShadow
            />
          </mesh> */}
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}
