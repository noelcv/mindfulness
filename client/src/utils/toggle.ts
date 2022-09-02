import React, { SetStateAction } from "react";

export const toggle = (setState: React.Dispatch<SetStateAction<any>>, stateToToggle: any) => {
  setState(!stateToToggle);
}
