import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";

interface HoldProps {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  holdType?: "cube" | "sphere"; // crimp, pinch, volume..., etc.
}

const ClimbingHold: React.FC<HoldProps> = ({
  position,
  size,
  color,
  holdType = "cube",
}) => {
  return (
    <mesh position={position}>
      {holdType === "sphere" ? (
        <sphereGeometry args={[size[0] / 2, 32, 32]} />
      ) : (
        <boxGeometry args={size} />
      )}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default ClimbingHold;
