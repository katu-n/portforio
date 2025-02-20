import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Page404 } from "./pages/NotFound";
import { CommonErrorPage } from "./pages/CommonError";
import { ContactPage } from "./component/page-parts/ContactPage";
import FollowingMouse from "./component/mouse";
import { PageTest } from "./pages/pageTest";

const rooter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<CommonErrorPage />}>
      <Route index element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Page404 />} />
      <Route path="test" element={<PageTest/>}/>
    </Route>
  )
);

export const App = () => {
  const location = useLocation();

  ///contactのみmouseEventを反映させない
  const showFollowingMouse = location.pathname !== "/contact";
  return (
    <>
      {showFollowingMouse && <FollowingMouse />}
      <RouterProvider router={rooter} />
    </>
  );
};
