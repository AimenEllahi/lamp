import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { Lamp } from "./Lamp";


const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html style={{ color: "black"
    ,marginTop: "22vw", marginLeft: "48vw"
     }}>
      {progress} % loaded
    </Html>
  );
};

export default function Index() {

    const {position, rotation, scale} = useControls('SpotLight', {
        position: {  value: [3.699999999999998,450,-332.5], step: 0.1 },
        rotation: {  value: [-8.6, 0.6 ,-54.94999999999993], step: 0.1 },
        scale: {  value: 1, step: 0.01 },
        })

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas >
        {/* <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} /> */}
        <Suspense fallback={<Loader />}>
          {/* <directionalLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} /> */}
          <spotLight
            intensity={0.5}
            
           position={position} rotation={rotation} scale={scale} />
            <Lamp />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}
