import React from "react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useControls } from "leva";
gsap.registerPlugin(ScrollTrigger);
export default function ScrollAnimation() {
  const { camera } = useThree();

  const { position, rotation } = useControls({
    position: {
      value: [0, 1, -2.5],
      step: 0.5,
    },
    rotation: {
      value: [2, 0, 0],
      step: 0.5,
    },
  });

  useEffect(() => {
    camera.position.set(...position);
    camera.rotation.set(...rotation);
  }, [position, rotation]);

  useEffect(() => {
    let t1 = gsap.timeline({});
    const scrollDirection = { value: 0 };
    t1.from(camera.position, {
      x: 0,
      y: 1,
      z: -2.5,
    }).to(camera.position, {
      y: 0,
      z: 5,
      duration: 4,
      ease: "power2.easeOut",
      onUpdate: () => {
        if (scrollDirection.value > 0) {
          gsap.to(camera.rotation, {
            x: 0,
          });
        } else if (scrollDirection.value < 0 && camera.position.z < 0) {
          gsap.to(camera.rotation, {
            x: 2,
          });
        }
      },
    });

    ScrollTrigger.create({
      animation: t1,
      trigger: ".trigger",
      start: "top top",
      end: `+=5000`, // Adjust this value to control the total distance of the scroll animation
      scrub: 2,

      pin: true,
      anticipatePin: true,
      //check firection of scroll
      onUpdate: (self) => {
        if (self.direction > 0) {
          scrollDirection.value = 1;
        } else {
          scrollDirection.value = -1;
        }
      },
    });
  }, []);
  return null;
}
