/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import { Html, useAnimations, useGLTF } from "@react-three/drei";

/* This component initialize a model at static position in the idle state */
export const SelectionOnlyModel = ({name, path, position, selectHandler}) => {
    const {scene, animations} = useGLTF(path);
    const {actions} = useAnimations(animations, scene);
    useEffect(() => {
        actions?.Idle.play();
    },[]);

    const markerPosition = [position[0], position[1]+2, position[2]];
    return <>
    <primitive object={scene} position={position} />
    <Html position={markerPosition}>
        <button onClick={() => selectHandler(path)}>{name}</button>
    </Html>
    </>
}