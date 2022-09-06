import React, { useState } from "react";
import AsyncLoadAvatar from "../components/Avatar";
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
      {selectedModel && (
        <>
          <AsyncLoadAvatar path={selectedModel} initialPosition={[0, 0, 3.5]} />
          <SwitchRooms {...{ setIsOpen }}/>
        </>
      )}
    </>
  );
};

export default AvatarInitialization;
