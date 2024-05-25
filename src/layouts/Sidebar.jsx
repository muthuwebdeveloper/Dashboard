// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/plus-circle.svg";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "@remixicon/react";
import { routes } from "../constants/sidebarRoutes";

const Sidebar = ({ handleMenu, open }) => {
  return (
    <div className="sidebar">
      <div className="side_top">
        <div className="logo_img">
          <img src={logo} alt="Logo" className="logo" />
          <p className={`logo_text ${!open ? "collapsed" : ""}`}>kodukku</p>
        </div>
      </div>
      <div className="side_middle">
        <ul className="sidebar_nav">
          {routes.map((route) => (
            <li
              key={route.key}
              className={`sidebar_item ${!open ? "collapsed" : ""}`}
            >
              <NavLink
                to={route.path}
                className="nav_link"
                activeClassName="active"
              >
                {route.icon}
                <p>{route.label}</p>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="side_arrow" onClick={handleMenu}>
          {open ? (
            <RiArrowDropLeftLine className="icon side-arrow_icon" />
          ) : (
            <RiArrowDropRightLine className="icon side-arrow_icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
