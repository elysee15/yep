import React from "react";
import type { RadioGroupState } from "react-stately";

export const RadioContext = React.createContext<RadioGroupState | undefined>(
  undefined
);

export default function useRadioContext() {
  const context = React.useContext(RadioContext);

  if (!context) {
    throw new Error(
      `useRadioContext should be called within a RadioContext provider`
    );
  }

  return context;
}
