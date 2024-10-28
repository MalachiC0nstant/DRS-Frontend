import React, { useState } from "react";
import * as THREE from "three";

interface HoldProps {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  holdType?: "cube" | "sphere";
}

const ClimbingHold: React.FC<HoldProps> = ({
  position,
  size,
  color,
  holdType = "cube",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<THREE.Vector3>(
    new THREE.Vector3(...position)
  );

  const onPointerDown = (event: any) => {
    event.stopPropagation();
    setIsDragging(true);
  };

  const onPointerMove = (event: any) => {
    if (isDragging) {
      event.stopPropagation();
      const newPosition = event.point;
      setCurrentPosition(newPosition);
    }
  };

  const onPointerUp = (event: any) => {
    event.stopPropagation();
    setIsDragging(false);
  };

  const onPointerOut = (event: any) => {
    if (isDragging) {
      event.stopPropagation();
      setIsDragging(false);
    }
  };

  return (
    <mesh
      position={currentPosition}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerOut={onPointerOut}
    >
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
