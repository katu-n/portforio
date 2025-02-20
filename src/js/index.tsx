import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { CursorProvider } from "./system/Cursor";
import FollowingMouse from "./component/mouse";
import { App } from "./profile";
import "../css/main.css";

const root = createRoot(document.getElementById("profile")!);
root.render(
  <>
    <BrowserRouter>
      <CursorProvider>
        {/* <FollowingMouse /> */}
        <App />
      </CursorProvider>
    </BrowserRouter>
  </>
);
