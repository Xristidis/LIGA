import React from 'react';
import "../lobby/lobby.scss";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import epl from "../../assets/epl-logo.png";
import liga from "../../assets/liga-logo.png"
import uefa from "../../assets/uefa-logo.png"

class Lobby extends React.Component {
    render() {
        return (
            <main className="lobby">
                <div className="lobby__wrapper">
                    <h1 className="lobby__header">CHOOSE LEAGUE</h1>
                    <div className="lobby__button-wrapper">
                        <Link className="lobby__link" to={{
                            pathname: "/premier-league"
                        }}>
                            <button className="lobby__button">
                                <img className="lobby__competition" src={epl}></img>
                            </button>
                            <div className="lobby__league-name">Premier League</div>
                        </Link>
                        <Link className="lobby__link" to={{
                            pathname: "/la-liga"
                        }}>
                            <button className="lobby__button">
                                <img className="lobby__competition" src={liga}></img>
                            </button>
                            <div className="lobby__league-name">La Liga BBVA</div>
                        </Link>
                        <Link className="lobby__link" to={{
                            pathname: "/champions-league"
                        }}>
                            <button className="lobby__button">
                                <img className="lobby__competition" src={uefa}></img>
                            </button>
                            <div className="lobby__league-name">UEFA Champions League</div>
                        </Link>
                        <Navbar />
                    </div>
                </div>
            </main>
        );
    }
}
export default Lobby;
