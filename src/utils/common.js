export const initialState = {
  modelPath: "/models/reception/reception.gltf",
  rotationValues: [0, -90, 0],
  positionValues: [-10, 0, -5],
  scaleValues: [4, 4, 4],
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
