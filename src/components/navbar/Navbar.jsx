import "./Navbar.css";

import React from "react";

function Navbar({ userLength }) {
  return (
    <div className="navbar">
        <div className="container">
            <div className="navbar-wrapper">
                <h1 className="navbar-logo">CUser</h1>
                <h3 className="navbar-info">
                    {userLength > 0 ? `You have ${userLength}` : "No user yet :("}
                </h3>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
