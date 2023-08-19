import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
      <body style={{alignItems: "center"}}>
        <img
          className="w-1/2 max-w-sm mx-auto"
          src="../HackRMatchLogo.png"
          alt="HackRMatch Logo"
        ></img>
          <Link to="/create-profile" className="px-8">
            Sign in
          </Link>
      </body>
    )
};

export default Landing;