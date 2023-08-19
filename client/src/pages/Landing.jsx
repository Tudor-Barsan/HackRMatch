import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

const Landing = () => {
  const {user} = useAuthContext()
  const { dispatch } = useAuthContext();

  useEffect(() => {}, [])

  const logOutUser = async () => {
    const response = await axios
      .get("http://localhost:8080/auth/logout", { withCredentials: true })
      .catch((err) => {
          console.log(err);
      });
      console.log(response)
    if (response) {
        console.log('should return response')
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
          <Link to="/auth/login">Login</Link>
          {user && <button onClick={logOutUser}>Logout</button>}
          {user ? <div>{user._id}</div> : <div>No one </div>}
        </>
    )
};

export default Landing;