import { Plane } from "@react-three/drei";
import React from "react";

const Floor = () => {
    return (
        <Plane args={[40,40]} rotation-x={-Math.PI/2} position={[0, 0, -4]} receiveShadow>
           <meshBasicMaterial color="#7BC8A4" />
        </Plane>
    )
}

export default Floor;