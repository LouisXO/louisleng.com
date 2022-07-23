import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Love from "./component/Love";
import Main from "./component/Main";
import NavBar from "./component/NavBar";

export function AppRoute(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/love" element={<Love/>} />
            <Route path="*" element={<Navigate to="/" replace />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
