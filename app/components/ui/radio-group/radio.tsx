import React from "react";
import { VisuallyHidden, mergeProps, useFocusRing, useRadio } from "react-aria";
import useRadioContext from "./radio.context";

export default function Radio(props: any) {
  const { children } = props;
  const state = useRadioContext();
  const ref = React.useRef(null);
  const { inputProps, isSelected, isDisabled } = useRadio(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const strokeWidth = isSelected ? 6 : 2;

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        opacity: isDisabled ? 0.4 : 1,
      }}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <circle
          cx={12}
          cy={12}
          r={8 - strokeWidth / 2}
          fill="none"
          stroke={isSelected ? "orange" : "gray"}
          strokeWidth={strokeWidth}
        />
        {isFocusVisible && (
          <circle
            cx={12}
            cy={12}
            r={11}
            fill="none"
            stroke="orange"
            strokeWidth={2}
          />
        )}
      </svg>
      {children}
    </label>
  );
}
