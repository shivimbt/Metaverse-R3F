import React, { useState } from "react";
import AsyncLoadSelectionOnlyModel from "../components/SelectionOnlyModel";
import SwitchRooms from "./SwitchRooms";

const AvatarInitialization = ({ maleAvatar, femaleAvatar, setIsOpen }) => {
  const [selectedModel, setSelectedModel] = useState(null);
  return (
    <>
      {!selectedModel && (
        <>
          <AsyncLoadSelectionOnlyModel
            name="Bob"
            path={maleAvatar}
            position={[-1, 0, 0]}
            selectHandler={setSelectedModel}
          />
          <AsyncLoadSelectionOnlyModel
            name="Alice"
            path={femaleAvatar}
            position={[1, 0, 0]}
            selectHandler={setSelectedModel}
          />
        </>
      )}
      {selectedModel && <SwitchRooms {...{ setIsOpen, selectedModel }} />}
    </>
  );
};

export default AvatarInitialization;
