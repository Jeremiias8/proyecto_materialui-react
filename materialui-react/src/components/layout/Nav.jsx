import React from "react";
import '../../index.css'
import { NavLink } from "react-router-dom";

export const Nav = () => {

  return (
    <nav className="nav">
          <NavLink>HTML5</NavLink>
            &nbsp;
          <NavLink>CSS3</NavLink>
            &nbsp;
          <NavLink>Bootstrap</NavLink>
            &nbsp;
          <NavLink>JavaScript</NavLink>
            &nbsp;
          <NavLink>TypeScript</NavLink>
            &nbsp;
          <NavLink>Angular</NavLink>
            &nbsp;
          <NavLink>React</NavLink>
            &nbsp;
          <NavLink>NodeJS</NavLink>
            &nbsp;
          <NavLink>ExpressJS</NavLink>
            &nbsp;
          <NavLink>MongoDB</NavLink>
    </nav>
  );

};
