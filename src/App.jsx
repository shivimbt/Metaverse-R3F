import React, { Suspense, useState, useReducer } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
import Floor from "./components/Floor/Floor";
import CharacterController from "./components/CharacterController/CharacterController";
import Models from "./components/Models/Models";
import Box from "./components/Box/Box";
import { initialState, reducer } from "./utils/common";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import Titles from "./components/Titles/Titles";
import Text from "./components/Text/Text";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="canvas-container">
      <Canvas
        shadows={true}
        dpr={window.devicePixelRatio}
        camera={{ fov: 65, near: 0.1, far: 1000, position: [0, 15, 15] }}
        /* raycaster={{ enabled: false }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], far: 1000 }}
        gl={{
          powerPreference: "high-performance",
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
        onCreated={({ gl }) => gl.setClearColor("#f5f5f5")} */
      >
        <primitive object={new THREE.AxesHelper(5)} />
        {/* sky component */}
        {/* <color attach="background" args={["#80d6ff"]} /> */}
        {/* lighting components */}
        <ambientLight color="white" intensity={0.7} />
        {/* <pointLight
          position={[-60, 100, -10]}
          intensity={1}
          // color="white"
          castShadow={true}
        /> */}
        {/* Floor component */}
        {/* <Floor /> */}
        {/* avatar */}
        <CharacterController />
        {/* links */}
        {/* <Box {...{ state, dispatch }} /> */}
        {/* 3d models */}
        <Suspense fallback={null}>
          <Models {...{ state }} />
          {state.environmentImg && (
            <Environment
              files={state.environmentImg}
              position={[-8, 0, -2]}
              ground={{ height: 22, radius: 130 }}
            />
          )}

          <Titles {...{ state, dispatch }} />
          {/* <PerspectiveCamera makeDefault position={[-10, 60, 60]} fov={35} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
