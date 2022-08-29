import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
import Floor from "./components/Floor/Floor";
import CharacterController from "./components/CharacterController/CharacterController";

const App = () => {
  return (
    <div id="canvas-container">
      <Canvas
        shadows={true}
        dpr={window.devicePixelRatio}
        camera={{ fov: 65, near: 0.1, far: 1000, position: [0, 3, 3] }}
      >
        <primitive object={new THREE.AxesHelper(5)} />
        {/* sky component */}
        <color attach="background" args={["#80d6ff"]} />
        {/* lighting components */}
        <ambientLight color="white" intensity={0.7} />
        <pointLight
          position={[-60, 100, -10]}
          intensity={1}
          color="white"
          castShadow={true}
        />
        {/* Floor component */}
        <Floor />
        {/* avatar */}
        <CharacterController />
      </Canvas>
    </div>
  );
};

export default App;
