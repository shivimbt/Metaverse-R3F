import React, { Suspense, useReducer } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
/* import Floor from "./components/Floor/Floor"; */
import Header from "./components/Header/Header";
import Models from "./components/Models/Models";
import { initialState, reducer } from "./utils/common";
import { Environment, Sky } from "@react-three/drei";
import Tiles from "./components/Tiles/Tiles";
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
          {/* hotel's area  */}
          <Tiles
            {...{
              state,
              dispatch,
              tilePosTiles: [0, 0, 0],
              tilePosText: [0, 2.5, -2],
              tilePosImg: [0.5, -0.7, 0],
              tileTitle: "Room",
              tileImgUrl: "/images/2.jpg",
              tileModelPath: "/models/60s_room/bedroom.gltf",
              tileRotationValues: [0, 0, 0],
              tilePositionValues: [2, 2, -3.5],
              tileScaleValues: [2, 2, 2],
              tileEnvironmentImg: "",
            }}
          />
          <Tiles
            {...{
              state,
              dispatch,
              tilePosTiles: [2, 0, 0],
              tilePosText: [0, 2.5, -2],
              tilePosImg: [0.5, -0.7, 0],
              tileTitle: "Praty Hall",
              tileImgUrl: "/images/3.jpg",
              tileModelPath: "/models/premier_palace_kiev/partyhall.gltf",
              tileRotationValues: [0, 75, 0],
              tilePositionValues: [0, 0, 1],
              tileScaleValues: [1, 1, 1],
              tileEnvironmentImg: "",
            }}
          />
          <Tiles
            {...{
              state,
              dispatch,
              tilePosTiles: [4, 0, 0],
              tilePosText: [0, 2.5, -2],
              tilePosImg: [0.5, -0.7, 0],
              tileTitle: "Reception",
              tileImgUrl: "/images/4.jpg",
              tileModelPath: "/models/reception/reception.gltf",
              tileRotationValues: [0, -90, 0],
              tilePositionValues: [-10, 0, -5],
              tileScaleValues: [4, 4, 4],
              tileEnvironmentImg: "/lythwood_lounge_4k.hdr",
            }}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
