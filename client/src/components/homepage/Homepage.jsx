import React from "react";
import Navbar from "../navbar/Navbar";
import Match from "../match/Match";
import axios from "axios";
import "../homepage/homepage.scss";
import hero from "../../assets/hero-image.png";
import uefa from "../../assets/uefa-logo.png";
import epl from "../../assets/epl-logo.png";
import liga from "../../assets/liga-logo.png";


class Homepage extends React.Component {

    state = {
        matchData: [],
        leaguePath: {}
    };

    convertPathToId = () => {
        const pathName = this.props.location.pathname;
        let leagueId;
        // let logo;
        switch (pathName) {
            case "/england":
                leagueId = 524;
                // logo = epl;
                break;
            case "/spain":
                leagueId = 775;
                // logo = liga;
                break;
            case "/champions-league":
                leagueId = 530;
                // logo = uefa;
                break;
        }
        this.setState({ leaguePath: pathName });
        return leagueId;

    }

    componentDidMount() {
        const leagueId = this.convertPathToId();
        console.log(leagueId)
        axios
            .get(`http://localhost:8080/leagues/${leagueId}`)
            .then(res => {
                console.log(res.data.fixtures);
                const matchData = res.data.fixtures;
                this.setState({ matchData: matchData });
            });
    }

    render() {
        console.log(this.state.leagueId);
        console.log(this.state.matchData);
        return (
            <main className="homepage">
                <div className="homepage__wrapper">
                    <div className="homepage__image-wrapper">
                        <div className="homepage__heading-wrapper">
                            <img src={epl} alt="" className="homepage__image" />
                        </div>
                    </div>
                    <h1 className="homepage__header">RESULTS</h1>
                    {this.state.matchData.map(match => {
                        return <Match match={match} league={this.state.leaguePath} />
                    })}
                </div>
                <Navbar />
            </main>
        );
    }
}

export default Homepage;