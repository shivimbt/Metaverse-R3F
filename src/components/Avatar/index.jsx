import React, { Suspense } from "react";
import Avatar from "./Avatar";

const AsyncLoadAvatar = (props) => {
  return (
    <Suspense fallback={null}>
      <Avatar {...props} />
    </Suspense>
  );
};

export default AsyncLoadAvatar;