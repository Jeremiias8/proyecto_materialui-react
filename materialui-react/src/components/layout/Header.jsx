import React from "react";
import '../../index.css'
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export const Header = () => {

  return (
    <header className="header">
      <span><Link to="https://www.linkedin.com/in/jerem%C3%ADas-fern%C3%A1ndez-1ab01922a/">Linkedln</Link></span>

      <h1><Link to="https://github.com/Jeremiias8">Blog</Link></h1>
      
      <div className="searcher">
        <button><AiOutlineSearch /></button>

        <button><Link to="/sign-up">SIGN UP</Link></button>
      </div>
    </header>
  );
  
};
