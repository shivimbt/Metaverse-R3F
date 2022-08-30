/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import avatarPath from "../../assets/avatar.glb";
import useKeyPressed from "../../hooks/useKeyPressed";
import { useFrame, useThree } from "@react-three/fiber";
import useAnimationMap from "../../hooks/useAnimationMap";
import MovementController from "../../utils/MovementController";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const Avatar = () => {

  let movementController;

  const { scene, animations } = useGLTF(avatarPath);
  const { mixer, clips, actions } = useAnimations(animations, scene);
  
  const animationMap = useAnimationMap(clips, actions);
  const keysPressed = useKeyPressed();

  const modelRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    const orbitControls = new OrbitControls(camera, gl.domElement);
    orbitControls.minDistance = 1;
    orbitControls.maxDistance = 15;
    orbitControls.enablePan = false;
    orbitControls.enableDamping = true;
    orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
    movementController = new MovementController(modelRef.current, orbitControls, animationMap, mixer, "Idle");
  }, []);

  useFrame((state, delta, xrFrame) => {
    movementController && movementController.update(delta, keysPressed, state.camera);
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      rotation={[0, Math.PI, 0]}
      scale={[3, 3, 3]}
      position={[0, 0, 5]}
    />
  );
};

export default Avatar;
