import React, { createContext, ReactNode, useContext, useState } from "react";


type CursorContextType = {
    isActive:boolean;
    setActive:(active:boolean) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider:React.FC<{children:ReactNode}> = ({children}) => {
    const [isActive,setIsActive] = useState(false);

    const setActive = (active:boolean) => setIsActive(active);

    return(
        <CursorContext.Provider value={{isActive,setActive}}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => {
    const context = useContext(CursorContext);
    if (!context) {
      throw new Error("useCursor must be used within a CursorProvider");
    }
    return context;
  };