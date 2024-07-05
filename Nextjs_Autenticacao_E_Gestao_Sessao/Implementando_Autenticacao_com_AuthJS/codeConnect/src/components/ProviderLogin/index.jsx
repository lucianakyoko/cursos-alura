'use client'
import Image from "next/image";
import { IconButton } from "../IconButton";
import {signIn} from 'next-auth/react'

import githubImg from "./github.png";

export const Github = (props) => {
  function loginAttempt() {
    signIn('github', {
      callbackUrl: '/'
    })
  }
  return (
    <IconButton {...props} onClick={loginAttempt}>
      <Image src={githubImg} alt="Github Logo" />
    </IconButton>
  );
};
