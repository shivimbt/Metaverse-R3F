import React, { Suspense } from "react";
import Avatar from "../Avatar/Avatar";

const CharacterController = () => {
    
  return (
    <Suspense fallback={null}>
        <Avatar />
    </Suspense>
  )
};

export default CharacterController;