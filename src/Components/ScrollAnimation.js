import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useControls } from "leva";
gsap.registerPlugin(ScrollTrigger);
export default function ScrollAnimation() {
  const { camera } = useThree();

  const { position, rotation } = useControls("camera",{
    position: {
      value: [0, 2.55, 0.55],
      step: 0.01,
    },
    rotation: {
      value: [0, 0, 0],
      step: 0.5,
    },
  });

  //{"position":[0,3,-2.5]}

  useEffect(() => {
    camera.position.set(...position);
    camera.rotation.set(...rotation);
    camera.fov = 45;
  }, [position, rotation]);

  useEffect(() => {
    let t1 = gsap.timeline({});
    const scrollDirection = { value: 0 };
    t1.from(camera.position, {
      x: 0,
      y: 2.51,
      z: 0.13,
    })
      .to(camera.position, {
        z: 2,
        y: 2,
        duration: 5,
        // onUpdate: () => {
        //   camera.fov = 45;
        // },
      })

      // .to(camera.position, {
      //   x: 0,
      //   y: 1.1,
      //   z: 0,
      //   duration: 5,
      // })
      // .to(camera.rotation, {
      //   x: 2,
      // })

      .to(camera.position, {
        y: 0.5,
        delay: 0.5,
        z: 8,
        duration: 5,
        ease: "power2.easeOut",
        // onUpdate: () => {
        //   if (scrollDirection.value > 0) {
        //     gsap.to(camera.rotation, {
        //       x: 0,
        //     });
        //   } else if (scrollDirection.value < 0 && camera.position.z < 0) {
        //     gsap.to(camera.rotation, {
        //       x: 0,
        //     });
        //   }
        // },
      });

    ScrollTrigger.create({
      animation: t1,
      trigger: ".trigger",
      start: "top top",
      end: `+=8000`, // Adjust this value to control the total distance of the scroll animation
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
