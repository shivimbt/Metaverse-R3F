import React, { Suspense, useState, useReducer } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
import Floor from "./components/Floor/Floor";
import Header from "./components/Header/Header";
import Models from "./components/Models/Models";
import Box from "./components/Box/Box";
import { initialState, reducer } from "./utils/common";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import Titles from "./components/Titles/Titles";
import Text from "./components/Text/Text";
import { Sky } from "@react-three/drei";
import BannerContent from "./components/BannerContent/BannerContent";
import avatarPath from "./assets/avatar.glb";
import avatarFemalePath from "./assets/avatar_female.glb";
import AvatarInitialization from "./scenes/AvatarInitialization";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="canvas-container">
      <Header />
      <BannerContent />
      <Canvas
        shadows={true}
        dpr={window.devicePixelRatio}
        camera={{ fov: 65, near: 0.1, far: 1000, position: [0, 1.5, 5] }}
      >
        <primitive object={new THREE.AxesHelper(5)} />
        {/* sky component */}
        <Sky
          distance={450000}
          sunPosition={[5, 1, 8]}
          inclination={0}
          azimuth={47}
        />
        {/* lighting components */}
        <ambientLight color="white" intensity={0.7} />
        <pointLight
          position={[-60, 100, -10]}
          intensity={1}
          color="white"
          castShadow={true}
        />
        {/* Floor component */}
        {/* <Floor /> */}
        {/* avatar */}
        <AvatarInitialization
          maleAvatar={avatarPath}
          femaleAvatar={avatarFemalePath}
        />
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
