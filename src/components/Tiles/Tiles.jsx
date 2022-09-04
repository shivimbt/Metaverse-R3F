import React, { useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import "./Tiles.css";

export const Tiles = (props) => {
  const { viewport, camera } = useThree();
  const groupRef = useRef(null);
  console.log("tileId", props.tileId, "props.index", props.index);
  useEffect(() => {
    const groupRefCopy = groupRef.current;
    camera.add(groupRefCopy);
    return () => {
      camera.remove(groupRefCopy);
    };
  }, [camera]);
  console.log("props", props);
  return (
    <group
      ref={groupRef}
      position={[
        -viewport.width / 2.2,
        viewport.height / 3.8 + props.tileHeight,
        -5,
      ]}
      rotation={[0, 0, 0]}
    >
      <Html
        style={{
          opacity: props.show ? 1 : 0,
          width: 150,
          userSelect: "none",
          cursor: "pointer",
          pointerEvents:
            props.tileId !== props.state.selectedTile ? "auto" : "none",
          border:
            props.tileId === props.state.selectedTile
              ? "5px solid #143e54cc"
              : "0",
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          onClick={(e) =>
            props.dispatch({
              type: "CHANGE_MODEL",
              payload: {
                modelPath: props.sceneModelPath,
                rotationValues: props.sceneRotationValues,
                positionValues: props.scenePositionValues,
                scaleValues: props.sceneScaleValues,
                environmentImg: props.sceneEnvironmentImg,
                selectedTile: props.tileId,
              },
            })
          }
        >
          <p className="tiles">{props.tileTitle}</p>
          <img
            width={150}
            height={100}
            src={props.tileImgUrl}
            alt={props.tileTitle}
          />
        </div>
      </Html>
    </group>
  );
};

export default Tiles;
