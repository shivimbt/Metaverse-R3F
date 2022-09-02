/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useGLTF } from "@react-three/drei";

export const Models = ({ state }) => {
  console.log("state.modelPath", state.modelPath);
  const { scene } = useGLTF(process.env.PUBLIC_URL + state.modelPath);
  // const materials = useLoader(MTLLoader, "Poimandres.mtl");
  // const obj = useLoader(OBJLoader, "/models/Reception_table_new.obj");
  // const obj = useLoader(FBXLoader, "/models/Reception_table.fbx");

  return (
    <group dispose={null}>
      <primitive
        object={scene}
        rotation={state.rotationValues}
        position={state.positionValues}
        scale={state.scaleValues}
        /* rotation={[0, 91, 0]}
        position={[0, 0.5, -10]}
        scale={[0.07, 0.07, 0.07]} */
      />
    </group>
  );
};

export default Models;
