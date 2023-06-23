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
import { LampNew } from "./LampNew";
import { MeshBasicMaterial } from "three";
import ScrollAnimation from "./ScrollAnimation";

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
      value: [0, 1.75, 1.1],
      step: 0.05,
    },
    rotation: { value: [0, 0, 0], step: 0.1 },
    scale: { value: 1, step: 0.01 },
    radiusTop: { value: 1.05, step: 0.01 },
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
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#000",
        }}
      >
        <Canvas shadows>
          <Suspense fallback={<Loader />}>
            <PresentationControls>
              <LampNew />
            </PresentationControls>
          </Suspense>
          <ScrollAnimation />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>

      <section data-scroll-section style={{ height: "1vh" }}></section>
      <section
        className='trigger'
        data-scroll-section
        style={{ height: "20vh" }}
      ></section>
    </div>
  );
}
