import React, { useEffect, useRef } from "react";
import { Image } from "@react-three/drei";
function Box(props) {
  const box = useRef();

  /* useFrame(
      () =>
        box.current &&
        void ((box.current.rotation.x += 0.01), (box.current.rotation.y += 0.01))
    ); */
  return (
    <>
      <mesh
        ref={box}
        position={[2.5, -0.24, 1]}
        onClick={(e) =>
          props.dispatch({
            type: "CHANGE_MODEL",
            payload: {
              modelPath: "/models/60s_room/bedroom.gltf",
              rotationValues: [0, 0, 0],
              positionValues: [5, 9, -12],
              scaleValues: [7, 7, 7],
            },
          })
        }
      >
        <boxGeometry attach="geometry" args={[2, 2, 2]} />
        <meshStandardMaterial
          attach="material"
          color={0x0ff000}
          position={[-12, 0, -2]}
        />
      </mesh>
      {/* <Image url="/logo192.png" transparent opacity={1} /> */}
    </>
  );
}

export default Box;
