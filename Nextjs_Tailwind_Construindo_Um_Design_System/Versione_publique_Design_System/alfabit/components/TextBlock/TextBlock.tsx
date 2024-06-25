import React from "react";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";

export type TextBlockProps = {
  title?: string;
  type?: "primary" | "secondary" | "dark";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const TextBlock = ({
  title,
  type = "dark",
  children,
  className,
  ...rest
}: TextBlockProps) => {
  const textClass = type === "primary" ? "text-white" : "text-gray-primary";
  return (
    <Box className="flex flex-col gap-2" type={type} rounded {...rest}>
      <div className="p-5">
        <Typography className={`font-bold ${textClass}`} size="xl">
          {title}
        </Typography>
        <Typography className={textClass}>{children}</Typography>
      </div>
    </Box>
  );
};

export default TextBlock;
