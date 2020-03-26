import React from 'react';
import "../navbar/navbar.scss";
import lobby from "../../assets/lobby.png";
import login from "../../assets/login.png"
import favs from "../../assets/favs.png"
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <Link className="navbar" to="/">
                <div className="navbar__link-wrapper">
                    <img className="navbar__icon" src={lobby} alt="" />
                    <span className="navbar__button-title">Lobby</span>
                </div>
                <div className="navbar__link-wrapper">
                    <img className="navbar__icon" src={login} alt="" />
                    <span className="navbar__button-title">Log In</span>
                </div>
                <div className="navbar__link-wrapper">
                    <img className="navbar__icon" src={favs} alt="" />
                    <span className="navbar__button-title">Favourites</span>
                </div>
            </Link>
        );
    }
}

export default Navbar;
