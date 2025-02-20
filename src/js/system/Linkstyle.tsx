import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCursor } from "./Cursor";

interface ThreadLinkProps {
  className: string;
  to: string;
  children: React.ReactNode;
}

export const ThreadLink: React.FC<ThreadLinkProps> = ({
  className,
  to,
  children,
}) => {
  const { setActive } = useCursor();
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/main");
  }
  return (
    <Link
      className={className}
      to={to}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={handleLogin}
      reloadDocument
    >
      {children}
    </Link>
  );
};
