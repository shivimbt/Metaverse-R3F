import * as THREE from "three";
import { proxy } from "valtio";

export const initialState = {
  modelPath: "/models/reception_desk_diarama/reception_desk.gltf",
  rotationValues: [0, -91, 0],
  positionValues: [0, 0, -7],
  scaleValues: [0.03, 0.03, 0.03],
  environmentImg: "lobby",
  selectedTile: "tile_1",
};

export const reducer = (state, { type, payload = {} }) => {
  if (!state) {
    state = initialState;
  }
  switch (type) {
    case "CHANGE_MODEL":
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled acttion type: ${type}`);
  }
};

export const damp = THREE.MathUtils.damp;
export const state = proxy({
  clicked: null,
  urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 5, 7, 8, 2, 4, 9, 6].map(
    (u) => `/images/${u}.jpg`
  ),
});
