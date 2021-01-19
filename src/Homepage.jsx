import React from "react";
import "./Homepage.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Hats</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">jacket</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">sneakers</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">womens</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">men</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
