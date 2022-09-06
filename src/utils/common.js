import * as THREE from "three";
import { proxy } from "valtio";

export const initialState = {
  modelPath: "/models/hotel_lobby.glb",
  rotationValues: [0, 0, 0],
  positionValues: [0, 0, -3],
  scaleValues: [0.9, 0.9, 0.9],
  environmentImg: "lobby",
  selectedTile: "tile_1",
  isBookingModalOpened: false
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
    case "BOOKING_MODAL_OPENED":
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
