/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import bedroomPath from "../../assets/models/60s_room/bedroom.gltf";
// import receptionPath from "/reception.gltf";
// import city from "/models/city/scene.gltf";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export const Models = ({ state }) => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + state.modelPath);
  // const materials = useLoader(MTLLoader, "Poimandres.mtl");
  // const obj = useLoader(OBJLoader, "/models/reception-hospital.obj");
  return (
    <>
      <primitive
        object={scene}
        rotation={state.rotationValues}
        position={state.positionValues}
        scale={state.scaleValues}
        /* rotation={[0, 91, 0]}
        position={[0, 0.5, -10]}
        scale={[0.07, 0.07, 0.07]} */
      />
    </>
  );
};

export default Models;
