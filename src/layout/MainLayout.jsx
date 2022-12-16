import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components";

import "./mainlayout.scss";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default MainLayout;
