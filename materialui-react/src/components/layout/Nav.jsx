import React from "react";
import '../../index.css'
import { NavLink } from "react-router-dom";

export const Nav = () => {

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink>Tech</NavLink>
        </li>
        <li>
          <NavLink>Design</NavLink>
        </li>
        <li>
          <NavLink>Culture</NavLink>
        </li>
        <li>
          <NavLink>Business</NavLink>
        </li>
        <li>
          <NavLink>Politics</NavLink>
        </li>
        <li>
          <NavLink>Opinion</NavLink>
        </li>
        <li>
          <NavLink>Science</NavLink>
        </li>
        <li>
          <NavLink>Health</NavLink>
        </li>
        <li>
          <NavLink>Style</NavLink>
        </li>
        <li>
          <NavLink>Travel</NavLink>
        </li>
      </ul>
    </nav>
  );

};
