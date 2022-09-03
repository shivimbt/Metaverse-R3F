import * as THREE from "three";
import { proxy } from "valtio";

export const initialState = {
  modelPath: "/models/reception/reception.gltf",
  rotationValues: [0, -90, 0],
  positionValues: [-10, 0, -5],
  scaleValues: [4, 4, 4],
  environmentImg: "/lythwood_lounge_4k.hdr",
  selectedTile: "tile_1",
  /* modelPath: "/models/60s_room/bedroom.gltf",
  rotationValues: [0, 0, 0],
  positionValues: [2, 2, -3.5],
  scaleValues: [2, 2, 2],
  environmentImg: "", */
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
