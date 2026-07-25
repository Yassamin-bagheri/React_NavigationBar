import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      <h1>My App</h1>
      <div className="topnav-right">
        <h3>Dashboard</h3>
        <h3>Login</h3>
        <h3>Registeration</h3>
      </div>
    </div>
  );
};

export default NavigationBar;
