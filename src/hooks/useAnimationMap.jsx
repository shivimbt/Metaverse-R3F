/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const useAnimationMap = (clips, actions) => {
  const animationMap = new Map();
  useEffect(() => {
    clips
      .filter((clip) => clip.name !== "TPose")
      .forEach((clip) => animationMap.set(clip.name, actions?.[clip.name]));
  }, []);

  return animationMap;
};

export default useAnimationMap;
