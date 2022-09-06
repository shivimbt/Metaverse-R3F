import React, { useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import "./Tiles.css";

export const Tiles = (props) => {
  const { viewport, camera } = useThree();
  const groupRef = useRef(null);
  const isSelected = props.tileId === props.state.selectedTile;
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
          width: 150,
          height: "auto",
          cursor: "pointer",
          // pointerEvents: isSelected ? "none" : "auto",
          border: isSelected ? "5px solid #ff8000" : "5px solid transparent",
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
          className={isSelected ? "tiles selectedTiles" : "tiles"}
        >
          <img
            width={125}
            height={45}
            src={props.tileImgUrl}
            alt={props.tileTitle}
          />
          <p>{props.tileTitle}</p>
          {isSelected && (
            <button
              style={{ width: "100%", opacity: props.show ? 1 : 0 }}
              onClick={() => props.setIsOpen(true)}
            >
              Book
            </button>
          )}
        </div>
      </Html>
    </group>
  );
};

export default Tiles;
