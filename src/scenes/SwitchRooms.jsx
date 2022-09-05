import React, { Suspense, useReducer, useEffect , useRef} from "react";
import { Environment, Html } from "@react-three/drei";
import Models from "../components/Models/Models";
import Tiles from "../components/Tiles/Tiles";
import { initialState, reducer } from "../utils/common";
import { tilesMockData } from "../Json/tilesJson.js";

import { useThree } from "@react-three/fiber";

const SwitchRooms = ({ setIsOpen }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { viewport, camera } = useThree();
  const groupRef = useRef(null);

  useEffect(() => {
    const groupRefCopy = groupRef.current;
    camera.add(groupRefCopy);
    return () => {
      camera.remove(groupRefCopy);
    };
  }, [camera]);

  const tilesComponent = tilesMockData.map((tilesObj, index) => {
    return (
      <Tiles
        key={tilesObj.tileId}
        {...{
          state,
          dispatch,
          index,
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
      <group
      ref={groupRef}
      position={[
        -viewport.width / 2.2,
        viewport.height / 3.8,
        -5,
      ]}
      rotation={[0, 0, 0]}
    >
      <Html style={{
        transform: 'none'
      }}>

      {/* hotel's area  */}
      {tilesComponent}

      {state.environmentImg === '' && <div
        style={{
          opacity: 1,
          width: 150,
          userSelect: "none",
          cursor: "pointer",
          border:  "5px solid transparent",
          textAlign: "center",
          backgroundColor: "#ffffff",
          marginTop: 30
        }}
      >
        <button style={{width: '100%'}} onClick={()=> setIsOpen(true)}>Book</button>
      </div>}
      </Html>

    </group>
    </Suspense>
  );
};

export default SwitchRooms;
