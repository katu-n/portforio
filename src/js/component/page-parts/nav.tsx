import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <ul className="flex">
        <li>introduce</li>
        <li>article</li>
        <Link to={"/contact"} reloadDocument>
          <li>contact</li>
        </Link>
      </ul>
    </div>
  );
};
