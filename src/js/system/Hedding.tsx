import React from "react";
import { PropsWithChildren } from "react";


type Props = {
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({level,children}:PropsWithChildren<Props>)=>{
    if(level === "h1") return <h1 className="font-bold text-5xl">{children}</h1>;
    if(level === "h2") return <h1 className="font-bold text-4xl">{children}</h1>;
    if(level === "h3") return <h1 className="font-bold text-3xl">{children}</h1>;
    if(level === "h4") return <h1 className="font-bold text-2xl">{children}</h1>;
    if(level === "h5") return <h1 className="font-bold text-xl">{children}</h1>;
    if(level === "h6") return <h1 className="font-bold text-lg">{children}</h1>;
}