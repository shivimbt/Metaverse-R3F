/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import useKeyPressed from "../../hooks/useKeyPressed";
import { useFrame, useThree } from "@react-three/fiber";
import useAnimationMap from "../../hooks/useAnimationMap";
import MovementController from "../../utils/MovementController";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const Avatar = ({ path, initialPosition, initialCamPosition }) => {
  let movementController;
  const modelRef = useRef();

  const { scene, animations } = useGLTF(path);
  const { mixer, clips, actions } = useAnimations(animations, scene);

  const animationMap = useAnimationMap(clips, actions);
  const keysPressed = useKeyPressed();

  
  const { camera, gl } = useThree();

  modelRef.current &&
    modelRef.current.position.set(
      initialPosition[0],
      initialPosition[1],
      initialPosition[2]
    );
  camera.position.set(initialCamPosition[0],initialCamPosition[1],initialCamPosition[2]);

  useEffect(() => {
    const orbitControls = new OrbitControls(camera, gl.domElement);
    orbitControls.minDistance = 1;
    orbitControls.maxDistance = 15;
    orbitControls.enablePan = false;
    orbitControls.enableDamping = true;
    orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
    orbitControls.target.set(
      initialPosition[0],
      initialPosition[1] + 1,
      initialPosition[2]
    );
    movementController = new MovementController(
      modelRef.current,
      orbitControls,
      animationMap,
      mixer,
      "Idle"
    );
    return () => orbitControls.dispose()
  }, []);

  useFrame((state, delta, xrFrame) => {
    movementController &&
      movementController.update(delta, keysPressed, state.camera);
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      rotation={[0, Math.PI, 0]}
      position={initialPosition}
    />
  );
};

export default Avatar;
