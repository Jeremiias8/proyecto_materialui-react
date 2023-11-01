import React from "react";
import '../../index.css'
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export const Header = () => {

  return (
    <header className="header">
      <span>SUBSCRIBE</span>

      <h1><Link to="/github.com/Jeremiias8">Blog</Link></h1>
      
      <div className="searcher">
        <AiOutlineSearch />

        <button>SIGN UP</button>
      </div>
    </header>
  );
  
};
