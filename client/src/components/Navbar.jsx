import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext.js";

const Navbar = () => {
    const {user} = useAuthContext()
    const { dispatch } = useAuthContext();

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
        <div>
            <nav>
                <a href="/" className="logo-button">
                    <img
                        width="50%"
                        src="../HackRMatchSmallLogo.png"
                        alt="HackRMatch Small Logo"
                    />
                </a>
                <ul id="navOptions">
                    <li><Link to="/hacker-view" className="nav-button">Matches</Link></li>
                    <li><button id="logoutBtn" className="nav-button" onClick={logOutUser}>Logout</button></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;