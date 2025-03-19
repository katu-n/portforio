import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { CursorProvider } from "./system/Cursor";
import { App } from "./profile";
import "../css/index.css";

const root = createRoot(document.getElementById("profile")!);
root.render(
  <>
    <BrowserRouter>
      <CursorProvider>
        <App />
      </CursorProvider>
    </BrowserRouter>
  </>
);
