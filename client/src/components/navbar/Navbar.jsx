import React from 'react';
import "../navbar/navbar.scss";
import lobby from "../../assets/lobby.png";
import login from "../../assets/login.png"
import favs from "../../assets/favs.png"

class Navbar extends React.Component {
    render() {
        return (
            <main className="navbar">
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
                    <span className="navbar__button-title">Favourties</span>
                </div>
            </main>
        );
    }
}

export default Navbar;
