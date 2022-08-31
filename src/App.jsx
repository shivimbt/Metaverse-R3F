import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
import Floor from "./components/Floor/Floor";
import Header from "./components/Header/Header";
import { Sky } from "@react-three/drei";
import BannerContent from "./components/BannerContent/BannerContent";
import avatarPath from "./assets/avatar.glb";
import avatarFemalePath from "./assets/avatar_female.glb";
import AvatarInitialization from "./scenes/AvatarInitialization";

const App = () => {
  
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
        <Floor />
        {/* avatar */}
        <AvatarInitialization maleAvatar={avatarPath} femaleAvatar={avatarFemalePath} />
      </Canvas>
    </div>
  );
};

export default App;
