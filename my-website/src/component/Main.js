import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './Main.css';

function Main(props) {
  return (
    <div className="main">
      
      <Link to="/love" style={{ textDecoration: 'none' ,color: '#FFF'}}><h1>Love of My Life</h1></Link>


    </div>
  );
}

export default Main;