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
          ground={{ height: 22, radius: 130, scale: 800 }}
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
  );
};

export default SwitchRooms;
