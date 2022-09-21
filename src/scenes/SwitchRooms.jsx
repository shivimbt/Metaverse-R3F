import React, { Suspense, useReducer } from "react";
import { Environment, Html } from "@react-three/drei";
import Models from "../components/Models/Models";
import Tiles from "../components/Tiles/Tiles";
import { initialState, reducer } from "../utils/common";
import { tilesMockData } from "../Json/tilesJson.js";
import Avatar from "../components/Avatar/Avatar";
import Loader from "../components/Loader/Loader";
import HelperBanner from "../components/HelperBanner/HelperBanner";

const SwitchRooms = ({ setIsOpen, selectedModel }) => {
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
    <Suspense fallback={<Loader />}>
      <Avatar path={selectedModel} initialPosition={state.avatarPosition} initialCamPosition={state.camPosition} key={state.selectedTile}/>
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
