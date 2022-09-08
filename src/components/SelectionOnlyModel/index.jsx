
import React, { Suspense } from "react";
import Loader from "../Loader/Loader";
import {SelectionOnlyModel} from "./SelectionOnlyModel";

export const AsyncLoadSelectionOnlyModel = (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <SelectionOnlyModel {...props} />
    </Suspense>
  );
};

export default AsyncLoadSelectionOnlyModel;


