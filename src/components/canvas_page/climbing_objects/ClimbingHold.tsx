import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";

interface HoldProps {
  initialPosition: [number, number, number];
  color: string;
  Holdtype?: "sphere" | "cube"; // crimp, pinch, volume..., etc.
}

const Hold: React.FC<HoldProps> = ({
  initialPosition,
  color,
  Holdtype = "cube",
}) => {
  const [position, setPosition] = useState(initialPosition);

  // Movin the hold by updating position based on user
  const handleDrag = (event: any) => {
    // TODO: Logic for dragging the object
    setPosition([event.point.x, event.point.y, event.point.z]);
  };

  return (
    <mesh
      position={position}
      onPointerDown={handleDrag}
      onPointerMove={handleDrag}
    >
      {Holdtype === "sphere" ? (
        <sphereGeometry args={[0.2, 32, 32]} />
      ) : (
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      )}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Hold;
