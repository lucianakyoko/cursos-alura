import {
  XMarkIcon,
  InformationCircleIcon,
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import { cva, type VariantProps } from "class-variance-authority";

export type NoticeProps = VariantProps<typeof noticeVariants> & {
  type: "alert" | "success" | "error";
  children?: React.ReactNode;
  message: string;
  onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const getIcon = (type: NoticeProps["type"]) => {
  switch (type) {
    case "success":
      return <CheckIcon className="w-4 h-4" />;
    case "alert":
      return <InformationCircleIcon className="w-4 h-4" />;
    case "error":
      return <ExclamationTriangleIcon className="w-4 h-4" />;
  }
};

const noticeVariants = cva("", {
  variants: {
    type: {
      success: "text-green-900",
      error: "text-red-900",
      alert: "text-yellow-900",
    },
    defaultVariants: {
      variant: "typeDefault",
    },
  },
});

const Notice = ({
  children,
  type,
  message,
  className,
  onClose,
  ...rest
}: NoticeProps) => {
  return (
    <Box filledBackground rounded type={type} {...rest}>
      <div className="flex p-4 justify-between items-center">
        <div
          className={`flex gap-2 justify-between items-center ${noticeVariants({
            type,
          })}`}
        >
          {getIcon(type)}
          <Typography className={`${noticeVariants({ type })}`}>
            {message}
          </Typography>
        </div>
        {children}
        {onClose && (
          <XMarkIcon className="w-4 h-4 cursor-pointer" onClick={onClose} />
        )}
      </div>
    </Box>
  );
};

export default Notice;
