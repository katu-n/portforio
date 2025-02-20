import React from "react";
import { Heading } from "../system/Hedding";
import { Nav } from "../component/page-parts/nav";
import { Global } from "@emotion/react";
import { Surround } from "../system/Surroud";

export const Main = () => {
  return (
    <>
        <Global styles={Surround}/>
      <Heading level="h1">TOPpage</Heading>
      <Nav />
    </>
  );
};

export default Main;
