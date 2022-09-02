import React from "react";
import { Html } from '@react-three/drei';

export const Booking = () => {
    return (
    <group>
        <Html transform position={[0, 0, 10]}>
          <iframe width="200px" height="150px" src="booking.html" />
        </Html>
        {/* <Html transform position={[10, 0, 0]} rotation={[0, 90 * (Math.PI / 180), 0]}>
          <iframe width="800px" height="500px" src="https://www.htmlgoodies.com/" />
        </Html>
        <Html transform position={[-10, 0, 0]} rotation={[0, 270 * (Math.PI / 180), 0]}>
          <iframe width="800px" height="500px" src="https://www.htmlgoodies.com/" />
        </Html>
        <Html transform position={[0, 0, -10]} rotation={[0, 180 * (Math.PI / 180), 0]}>
          <iframe width="800px" height="500px" src="https://www.htmlgoodies.com/" />
        </Html>
        <Html transform position={[0, -6, 0]} rotation={[90 * (Math.PI / 180), 0, 0]}>
          <iframe width="800px" height="800px" src="https://www.htmlgoodies.com/" />
        </Html>
        <Html transform position={[0, 6, 0]} rotation={[90 * (Math.PI / 180), 0, 0]}>
          <iframe width="800px" height="800px" src="https://www.htmlgoodies.com/" />
        </Html> */}
      </group>
    )
}