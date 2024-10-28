import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ClimbingHold from "./climbing_objects/ClimbingHold";

const ThreeCanvas: React.FC = () => {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw" }}
      gl={{ antialias: true }}
      onCreated={(state) => state.gl.setClearColor("#333333")}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <gridHelper args={[10, 10, "#ffffff", "#888888"]} />

      {/* Test ClimbingHold component */}
      <ClimbingHold
        position={[0, 0.5, 0]}
        size={[0.3, 0.3, 0.3]}
        color="blue"
        holdType="cube"
      />
    </Canvas>
  );
};

export default ThreeCanvas;
