import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
  Text,
  useGLTF,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

// Definisikan posisi tetap di luar komponen
const socialLinks = [
  {
    text: "Email",
    position: [0, 2.5, -2],
    url: "mailto:bayuaryandi21@gmail.com",
    color: "#EA4335",
    scale: 0.3,
    modelPath: "/models/gmail.glb"
  },
  {
    text: "Instagram",
    position: [1, 2, -1.5],
    url: "https://instagram.com/wawewuawe",
    color: "#E4405F",
    scale: 0.3,
    modelPath: "/models/instagram.glb"
  },
  {
    text: "Resume",
    position: [-1,2, -1.5],
    url: "/doc/Profile.pdf",
    color: "#4CAF50",
    scale: 0.13,
    modelPath: "/models/resume.glb"
  },
  {
    text: "LinkedIn",
    position: [1.7, 1.5, -1],
    url: "https://linkedin.com/in/bayu-aryandi-wijaya-647b01215",
    color: "#0077B5",
    scale: 0.3,
    modelPath: "/models/linkedin.glb"
  },
  {
    text: "Github",
    position: [-1.7, 1.5, -1],
    url: "https://github.com/bayuawe",
    color: "#333333",
    scale: 0.3,
    modelPath: "/models/github.glb"
  }
];

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });

  const icosahedrons = useRef([]);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  useFrame((state) => {
    // Update posisi mouse
    mouse.current.x = state.mouse.x;
    mouse.current.y = state.mouse.y;

    // Update posisi text (hanya parallax, tanpa rotasi)
    icosahedrons.current.forEach((obj, index) => {
      if (obj) {
        // Efek parallax
        const basePosition = socialLinks[index].position;
        const parallaxStrength = 0.1;
        
        obj.position.x = basePosition[0] + mouse.current.x * parallaxStrength;
        obj.position.y = basePosition[1] + mouse.current.y * parallaxStrength;
        obj.position.z = basePosition[2];
      }
    });
  });

  return (
    <>
      <OrbitControls 
        maxDistance={7}
        minDistance={5}
        enablePan={false}
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 6}
        minPolarAngle={Math.PI / 2 - Math.PI / 6}
        maxPolarAngle={Math.PI / 2 + Math.PI / 25}
      />
      <Sky />
      <Environment preset="forest" background backgroundBlurriness={1} />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry args={[1, 1, 1, 8, 8]} />
            <meshStandardMaterial 
            color="#FFD6A5" 
            roughness={0.5}
            wireframe={false}
            fog={false}
            />
          </mesh>
        )}

        <mesh scale={1000} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="#FFD6A5" />
        </mesh >
        
        {socialLinks.map((link, i) => {
          const icon = useGLTF(link.modelPath);
          
          return (
            <group
              key={i}
              ref={(el) => (icosahedrons.current[i] = el)}
              position={link.position}
              scale={link.scale}
              onClick={() => handleClick(link.url)}
              onPointerOver={(e) => document.body.style.cursor = 'pointer'}
              onPointerOut={(e) => document.body.style.cursor = 'default'}
            >
              <primitive object={icon.scene} />
            </group>
          );
        })}
      </group>
    </>
  );
};
