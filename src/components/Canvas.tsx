import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeCanvas: React.FC = () => {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw" }}
      gl={{ antialias: true }}
      onCreated={(state) => state.gl.setClearColor("#333333")} 
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Grid Helper */}
      <gridHelper args={[10, 10, "#ffffff", "#888888"]} />

      {/* 3D objects go here */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Camera controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeCanvas;
