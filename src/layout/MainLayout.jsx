import React from "react";
import { Outlet } from "react-router-dom";
import "./mainlayout.scss";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__container">
          <h1 className="header__home-h1">TV Bland</h1>
          <div className="header__home-texts">
            <p className="header__home-text1">TV Show and web series database.</p>
            <p className="header__home-text2">Create personalised schedules.</p>
            <p className="header__home-text3">Episode guide,cast,crew and character information.</p>
          </div>
          {/* <h3 className="header__home-h3">Last Added Shows</h3> */}
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default MainLayout;
