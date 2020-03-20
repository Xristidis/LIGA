import React from 'react';
import "../lobby/lobby.scss";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
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
                        <Link className="lobby__link" to={{
                            pathname: "/england"
                        }}>
                            <button className="lobby__button">
                                <img className="lobby__competition" src={england}></img>
                            </button>
                        </Link>
                        <Link className="lobby__link" to={{
                            pathname: "/spain"
                        }}>
                            <button className="lobby__button">
                                <img className="lobby__competition" src={spain}></img>
                            </button>
                        </Link>
                        <Link className="lobby__link" to={{
                            pathname: "/champions-league"
                        }}>
                            <button className="lobby__button">
                                <img className="lobby__competition" src={CL}></img>
                            </button>
                        </Link>
                        <Navbar />
                    </div>
                </div>
            </main>
        );
    }
}

export default Lobby;
