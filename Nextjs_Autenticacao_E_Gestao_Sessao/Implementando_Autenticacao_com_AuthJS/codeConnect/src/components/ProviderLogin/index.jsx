import Image from "next/image";
import { IconButton } from "../IconButton";

import githubImg from "./github.png";

export const Github = (props) => {
  return (
    <IconButton {...props}>
      <Image src={githubImg} alt="Github Logo" />
    </IconButton>
  );
};
