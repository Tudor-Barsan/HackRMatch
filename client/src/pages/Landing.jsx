import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

const Landing = () => {
  const {user} = useAuthContext()
  const { dispatch } = useAuthContext();

  const logOutUser = async () => {
    const response = await axios
        .get("http://localhost:4000/auth/logout", { withCredentials: true })
        .catch((err) => {
            console.log(err);
        });
    if (response) {
        console.log(response)
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
    }
  }

    return (
      <>
        <img
          className="w-1/2 max-w-sm mx-auto"
          src="../HackRMatchLogo.png"
          alt="HackRMatch Logo"
        ></img>
          <Link to="/create-profile">
            Sign in
          </Link>
          <Link to="/auth/login">Login</Link>
          <button id="logout-btn" onClick={logOutUser}>Logout</button>
          {user && <div>{user._id}</div>}
        </>
    )
};

export default Landing;