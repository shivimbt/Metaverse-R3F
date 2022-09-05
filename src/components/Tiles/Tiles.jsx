import React from "react";
import { Html } from "@react-three/drei";
import "./Tiles.css";

export const Tiles = (props) => {
  return (
      <div
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
              : "5px solid transparent",
          textAlign: "center",
          backgroundColor: "#ffffff",
          marginTop: 30
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
      </div>
  );
};

export default Tiles;
