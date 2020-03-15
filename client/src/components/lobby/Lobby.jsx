import React from 'react';
import "../lobby/lobby.scss";
import Navbar from "../navbar/Navbar";
import england from "../../assets/england.svg";
import spain from "../../assets/spain.svg"
import CL from "../../assets/CL.png"


class Lobby extends React.Component {
    render() {
        return (
            <main className="lobby">
                <div className="lobby__wrapper">
                    <h1>Choose Your League</h1>
                    <div className="lobby__button-wrapper">
                        <button className="lobby__button">
                            <img className="lobby__competition" src={england}></img>
                        </button>
                        <button className="lobby__button">
                            <img className="lobby__competition" src={spain}></img>
                        </button>
                        <button className="lobby__button">
                            <img className="lobby__competition" src={CL}></img>
                        </button>
                        <Navbar />
                    </div>
                </div>
            </main>
        );
    }
}

export default Lobby;
