import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { Image, Html } from "@react-three/drei";
import Text from "../Text/Text";
import { useThree } from "@react-three/fiber";
import "./Tiles.css";

export const Tiles = (props) => {
  const { viewport, camera } = useThree();
  const groupRef = useRef(null);
  useEffect(() => {
    const groupRefCopy = groupRef.current;
    camera.add(groupRefCopy);
    return () => {
      camera.remove(groupRefCopy);
    };
  }, [camera, groupRef.current]);
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
          width: 300,
          userSelect: "none",
          pointerEvents: props.show ? "auto" : "none",
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
              },
            })
          }
        >
          <p className="tiles">{props.tileTitle}</p>
          <img with={200} height={100} src={props.tileImgUrl} />
        </div>
      </Html>
    </group>
  );
};

export default Tiles;
