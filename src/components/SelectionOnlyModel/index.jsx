import React, { Suspense } from "react";
import {SelectionOnlyModel} from "./SelectionOnlyModel";

export const AsyncLoadSelectionOnlyModel = (props) => {
  return (
    <Suspense fallback={null}>
      <SelectionOnlyModel {...props} />
    </Suspense>
  );
};

export default AsyncLoadSelectionOnlyModel;


