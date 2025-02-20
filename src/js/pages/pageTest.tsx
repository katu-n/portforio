import React from "react";
import Pagemove from "../system/Pagemove";
import { style } from "framer-motion/client";
import { background, border } from "@chakra-ui/react";
import { color } from "framer-motion";
import { useWindowSize } from "../system/UseWindowSize";
import { preloadModule } from "react-dom";

export const PageTest = () => {
const bookPageStyle = {
 width: "100%",
 height: "100%",
 fontSize: "2em",
 color: "#333",
 border: "1px solid #ccc",
 backgroundImage: "url('src/img/page.jpeg')",
 backgroundSize: "cover",
 fontFamily: "Merriweather,serif",
 padding: "20px",
 boxShadow: "inset 0 0 10px rgba(0,0,0,0.2)",
 borderRadius: "5px",
};
  const [width, height] = useWindowSize();
  return (
    <Pagemove width={width/2} height={height} flippingTime={1000} showCover={true}>
      <div style={{...bookPageStyle, textAlign: "center", fontSize:"3em", fontWeight:"bold"}}>
        Katu portfolio Book
      </div>
      <div style={bookPageStyle}>
        <h1>PageTest</h1>
      </div>
      <div style={bookPageStyle}>
        <h2>pagetest2</h2>
      </div>
      <div style={bookPageStyle}>
        <h3>pagetest3</h3>
      </div>
    </Pagemove>
  );
};
