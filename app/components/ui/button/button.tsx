import type { ReactNode } from "react";
import { useRef } from "react";
import type { AriaButtonProps } from "react-aria";
import { useButton } from "react-aria";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  startIcon?: ReactNode;
} & AriaButtonProps<"button">;

export default function Button(props: ButtonProps) {
  const { children, startIcon } = props;
  const ref = useRef(null);
  const { buttonProps } = useButton(
    {
      ...props,
    },
    ref
  );

  const className = twMerge(
    `p-4 bg-white flex gap-1 items-center `,
    props.className
  );

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={twMerge(
        `flex items-center gap-1 bg-white p-4 shadow-lg`,
        props.className
      )}
    >
      {startIcon && startIcon}
      {children}
    </button>
  );
}
