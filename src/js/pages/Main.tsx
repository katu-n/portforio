import React from "react";
import { Heading } from "../system/Hedding";
import { Nav } from "../component/page-parts/nav";
import { ClassNames, Global } from "@emotion/react";

export const Main = () => {
  return (
    <>
      <header className="bg-main">
        <div className="mx-10 py-5">
          <div className="text-4xl flex justify-between items-center">
            <div>Katu's Portfolio</div>
            <Nav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Main;
