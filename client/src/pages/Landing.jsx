import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

const Landing = () => {
  const {user} = useAuthContext()
  const { dispatch } = useAuthContext();

  useEffect(() => {}, [])

  const fetchAuthUser = async () => {
    const response = await axios
    .get("http://localhost:8080/auth/user", { withCredentials: true })
    .catch((err) => {
        console.log(err);
    });

    if (response && response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        await dispatch({type: 'LOGIN', payload: response.data})
    }
  }

  const redirectToGoogleSSO = async () =>{
      let timer = null;
      const loginURL = "http://localhost:8080/auth/google";
      const newWindow = window.open(
          loginURL,
        "_blank",
        "width=500,height=600",
      );

      if (newWindow) {
          timer = setInterval(() => {
              if (newWindow.closed) {
                fetchAuthUser();
                if (timer) clearInterval(timer);
              }
          }, 500);
      };
  }

  const logOutUser = async () => {
    const response = await axios
      .get("http://localhost:8080/auth/logout", { withCredentials: true })
      .catch((err) => {
          console.log(err);
      });
    if (response) {
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
    }
  }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          className="w-1/2 max-w-sm mx-auto"
          src="../HackRMatchLogo.png"
          alt="HackRMatch Logo"
        ></img>
          {(!user) && <div><button className="homeBtn" onClick={redirectToGoogleSSO}>Sign in with Google</button></div>}
          {(user) ? <Link className="homeBtn" to='/create-profile'>Create Profile</Link> : <></>}
          {user && <button className="homeBtn" onClick={logOutUser}>Logout</button>}
      </div>
    )
};

export default Landing;