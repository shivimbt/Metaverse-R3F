/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useKeyPressed = () => {
  const [keysPressed, setKeysPressed] = useState({});
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const updatedKeysPressed = keysPressed;
      updatedKeysPressed[e.key.toLowerCase()] = true;
      setKeysPressed(updatedKeysPressed);
    });
    document.addEventListener("keyup", (e) => {
      const updatedKeysPressed = keysPressed;
      updatedKeysPressed[e.key.toLowerCase()] = false;
      setKeysPressed(updatedKeysPressed);
    });
  }, []);

  return keysPressed;
};

export default useKeyPressed;
