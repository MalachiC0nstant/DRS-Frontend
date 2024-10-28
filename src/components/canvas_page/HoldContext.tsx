import React, { createContext, useState, ReactNode } from "react";

interface Hold {
  id: number;
  type: "cube" | "sphere";
  position: [number, number, number];
  color: string;
  size: [number, number, number];
}

interface HoldContextType {
  holds: Hold[];
  addHold: (hold: Hold) => void;
}

export const HoldContext = createContext<HoldContextType | undefined>(
  undefined
);

export const HoldProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [holds, setHolds] = useState<Hold[]>([]);

  const addHold = (hold: Hold) => setHolds((prevHolds) => [...prevHolds, hold]);

  return (
    <HoldContext.Provider value={{ holds, addHold }}>
      {children}
    </HoldContext.Provider>
  );
};
