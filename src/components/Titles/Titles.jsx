import React, { useRef } from "react";
import { Image, ScrollControls, Scroll, useScroll } from "@react-three/drei";
import Text from "../Text/Text";

export const Titles = (props, { left = false }) => {
  const ref = useRef();

  return (
    <mesh
      onClick={(e) =>
        props.dispatch({
          type: "CHANGE_MODEL",
          payload: {
            modelPath: "/models/60s_room/bedroom.gltf",
            rotationValues: [0, 0, 0],
            positionValues: [5, 9, -12],
            scaleValues: [7, 7, 7],
            environmentImg: "",
          },
        })
      }
    >
      <Text
        position={[-11, -2, 0]}
        fontSize={"0.5"}
        lineHeight={1}
        letterSpacing={-0.05}
        // maxWidth={(viewport.width / 4) * 3}
      >
        Room
        <meshBasicMaterial color="#cccccc" toneMapped={false} />
        <Image
          ref={ref}
          url="/images/1.jpg"
          position={[1, -1.5, 0]}
          scale={[2, 2, 2]}
          /* {...props}
            position={position}
            scale={scale}
            onClick={click}
            onPointerOver={over}
            onPointerOut={out} */
        />
      </Text>
    </mesh>
  );
};

export default Titles;
