import React from "react";
import { NavLink } from "react-router-dom";
import activeNavLink from "./activeNaveLink.module.css";
const ActiveNavLInk = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive
          ? activeNavLink.active
          : isPending
          ? activeNavLink.pending
          : activeNavLink.deafult
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveNavLInk;
