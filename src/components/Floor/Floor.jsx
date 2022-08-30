import { Plane } from "@react-three/drei";
import React from "react";

const Floor = () => {
    return (
      <Plane
        args={[70, 70]}
        rotation-x={-Math.PI / 2}
        position={[0, 0, 0]}
        receiveShadow
      >
        <meshBasicMaterial color="#7BC8A4" />
      </Plane>
    );
}

export default Floor;