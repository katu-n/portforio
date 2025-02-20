import React from "react";
import Pagemove from "../system/Pagemove";
import { style } from "framer-motion/client";
import { background } from "@chakra-ui/react";
import { color } from "framer-motion";
import { useWindowSize } from "../system/UseWindowSize";

export const PageTest = () => {
  const sytle = {
    width: "50%",
    height: "100%",
    // display: "flex",
    // justifyContent: "center",
    fontsize: "2em",
    // backgroundColor: "red",
    color: "blue",
    border: "1px solid black",
  };

  const [width, height] = useWindowSize();
  return (
    <Pagemove width={width} height={height} flippingTime={1000}>
      <div style={sytle}>
        <h1>PageTest</h1>
      </div>
      <div style={sytle}>
        <h2>pagetest2</h2>
      </div>
      <div style={sytle}>
        <h3>pagetest3</h3>
      </div>
    </Pagemove>
  );
};
