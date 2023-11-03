/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import activelink from "./activelink.module.css";
// import { Children } from "react";

const ActiveLink = ({ children, to,}) => {


    return (
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isActive
            ? activelink.active
            : isPending
            ? activelink.pendng
            : activelink.deafult
        }
      >
        {children}
      </NavLink>
    );
 
};

export default ActiveLink;
