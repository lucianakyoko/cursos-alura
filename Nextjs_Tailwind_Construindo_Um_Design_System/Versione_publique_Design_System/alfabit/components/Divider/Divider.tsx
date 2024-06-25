import React from "react";
import classNames from "classnames";

export type DividerProps = {
  width?: string;
  height?: string;
  bgColor?: "light" | "dark" | "black";
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const colorClassMap = {
  light: "bg-light",
  dark: "bg-dark",
  black: "bg-black",
};

const Divider = ({
  width,
  height = "h-[1px]",
  children,
  bgColor = "black",
  ...rest
}: DividerProps) => {
  const colorClass = colorClassMap[bgColor];

  const barClass = classNames(children ? "w-1/3" : "w-1/2", height, colorClass);

  return (
    <div className={classNames(width, "flex items-center justify-center")}>
      <div className={barClass}></div>
      {children && <div className="px-3">{children}</div>}
      <div className={barClass}></div>
    </div>
  );
};

export default Divider;
