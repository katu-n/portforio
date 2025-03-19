import React from "react";
import { Link } from "react-router-dom";
import { ToggleButton } from "./ToggleButton";

export const Nav = () => {
  return (
    <div>
      <ul className="flex space-x-8">
        <li className="text-3xl hover:underline">About</li>
        <li className="text-3xl hover:underline">Work</li>
        <li className="text-3xl hover:underline">Blog</li>
        <Link to={"/contact"} reloadDocument>
          <li className="text-3xl hover:underline">Contact</li>
        </Link>
        <ToggleButton/>
      </ul>
    </div>
  );
};
