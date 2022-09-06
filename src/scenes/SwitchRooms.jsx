import React, { Suspense, useReducer } from "react";
import { Environment, Html } from "@react-three/drei";
import Models from "../components/Models/Models";
import Tiles from "../components/Tiles/Tiles";
import { initialState, reducer } from "../utils/common";
import { tilesMockData } from "../Json/tilesJson.js";

const SwitchRooms = ({ setIsOpen }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const tilesComponent = tilesMockData.map((tilesObj, index) => {
    return (
      <Tiles
        key={tilesObj.tileId}
        {...{
          state,
          dispatch,
          index,
          setIsOpen,
          ...tilesObj,
        }}
      />
    );
  });

  return (
    <Suspense fallback={null}>
      <Models {...{ state }} />
      {state.environmentImg && (
        <Environment
          // files={state.environmentImg}
          preset={state.environmentImg}
          position={[-8, 0, -2]}
          ground={{ height: 22, radius: 130, scale: 800 }}
        />
      )}

      {/* hotel's area  */}
      {tilesComponent}
    </Suspense>
  );
};

export default SwitchRooms;
