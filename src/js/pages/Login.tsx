import React, { useEffect, useState } from "react";
import FollowingMouseEvent from "../component/mouse";
import { ThreadLink } from "../system/Linkstyle";
import { Global } from "@emotion/react";
import { Surround } from "../system/Surroud";
import { ToggleButton } from "../component/page-parts/ToggleButton";

export const Login = () => {
  return (
    <>
      <div className="h-screen relative">
        <div className="absolute top-2/4 w-full text-center">
      <ThreadLink
        className="area text-sky-500 hover:opacity-70 no-underline text-7xl mx-auto block"
        to="/main"
        >
        Welcome to Katsu's portfolio site
      </ThreadLink>
            </div>
        </div>
        <ToggleButton/>
      <FollowingMouseEvent />
      <Global styles={Surround} />
    </>
  );
};

export default Login;
