import { Environment } from "@react-three/drei";
import React, { Suspense, useReducer } from "react";
import Models from "../components/Models/Models";
import Tiles from "../components/Tiles/Tiles";
import { initialState, reducer } from "../utils/common";

const SwitchRooms = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
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
          sceneRotationValues: [0, 0, 0],
          scenePositionValues: [2, 2, -3.5],
          sceneScaleValues: [2, 2, 2],
          sceneEnvironmentImg: "",
          sceneModelPath: "/models/60s_room/bedroom.gltf",
          tilePos: [-8, 0, 0],
          tilePosText: [0, 2.5, -2],
          tilePosImg: [0.5, -0.7, 0],
          tileTitle: "Room",
          tileImgUrl: "/images/2.jpg",
          tileHeight: 0,
          show: true,
        }}
      />
      <Tiles
        {...{
          state,
          dispatch,
          sceneRotationValues: [0, 75, 0],
          scenePositionValues: [0, 0, 1],
          sceneScaleValues: [1, 1, 1],
          sceneEnvironmentImg: "",
          sceneModelPath: "/models/premier_palace_kiev/partyhall.gltf",
          tilePos: [-2, 0, 0],
          tilePosText: [0, 2.5, -2],
          tilePosImg: [0.5, -0.7, 0],
          tileTitle: "Praty Hall",
          tileImgUrl: "/images/3.jpg",
          tileHeight: -1.5,
          show: true,
        }}
      />
      <Tiles
        {...{
          state,
          dispatch,
          sceneRotationValues: [0, -90, 0],
          scenePositionValues: [-10, 0, -5],
          sceneScaleValues: [4, 4, 4],
          sceneModelPath: "/models/reception/reception.gltf",
          sceneEnvironmentImg: "/lythwood_lounge_4k.hdr",
          tilePos: [4, 0, 0],
          tilePosText: [0, 2.5, -2],
          tilePosImg: [0.5, -0.7, 0],
          tileTitle: "Reception",
          tileImgUrl: "/images/5.jpg",
          tileHeight: -3,
          show: true,
        }}
      />
    </Suspense>
  );
};

export default SwitchRooms;
