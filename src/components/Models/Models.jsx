/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useGLTF, PositionalAudio } from "@react-three/drei";

export const Models = ({ state }) => {
  console.log("state.modelPath", state.modelPath);
  const { scene } = useGLTF(process.env.PUBLIC_URL + state.modelPath);

  return (
    <group dispose={null}>
      <primitive
        object={scene}
        rotation={state.rotationValues}
        position={state.positionValues}
        scale={state.scaleValues}
      />
    </group>
  );
};

export default Models;
