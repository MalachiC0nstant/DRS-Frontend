import React, { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ClimbingHold from "./climbing_objects/ClimbingHold";
import { HoldContext } from "./HoldContext";

const ThreeCanvas: React.FC = () => {
  const { holds } = useContext(HoldContext)!;

  return (
    <Canvas
      style={{ height: "100vh", width: "100vw" }}
      gl={{ antialias: true }}
      onCreated={(state) => state.gl.setClearColor("#333333")}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <gridHelper args={[10, 10, "#ffffff", "#888888"]} />
      {/* <OrbitControls /> */}
      {holds.map((hold) => (
        <ClimbingHold
          key={hold.id}
          position={hold.position}
          size={hold.size}
          color={hold.color}
          holdType={hold.type}
        />
      ))}
    </Canvas>
  );
};

export default ThreeCanvas;
