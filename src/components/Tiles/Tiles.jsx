import React, { useRef } from "react";
import { Image } from "@react-three/drei";
import Text from "../Text/Text";

export const Tiles = (props) => {
  const ref = useRef();
  console.log("props", props);
  return (
    <mesh
      onClick={(e) =>
        props.dispatch({
          type: "CHANGE_MODEL",
          payload: {
            modelPath: props.tileModelPath,
            rotationValues: props.tileRotationValues,
            positionValues: props.tilePositionValues,
            scaleValues: props.tileScaleValues,
            environmentImg: props.tileEnvironmentImg,
          },
        })
      }
      position={props.tilePosTiles}
    >
      <Text
        position={props.tilePosText}
        fontSize={"0.2"}
        lineHeight={1}
        letterSpacing={-0.05}
      >
        {props.tileTitle}
        <meshBasicMaterial color="#000000" toneMapped={false} />
        <Image
          ref={ref}
          url={props.tileImgUrl}
          position={props.tilePosImg}
          scale={[1, 1, 1]}
        />
      </Text>
    </mesh>
  );
};

export default Tiles;
