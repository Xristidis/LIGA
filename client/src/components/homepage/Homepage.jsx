import React from "react";
import Navbar from "../navbar/Navbar";
import Match from "../match/Match";
import axios from "axios";
import "../homepage/homepage.scss"
// import { log } from "util";


class Homepage extends React.Component {

    state = {
        matchData: [],
        leaguePath: {}
    };

    convertPathToId = () => {
        const pathName = this.props.location.pathname;
        let leagueId;
        switch (pathName) {
            case "/england":
                leagueId = 524;
                break;
            case "/spain":
                leagueId = 775;
                break;
            case "/champions-league":
                leagueId = 530;
                break;
        }
        this.setState({ leaguePath: pathName });
        return leagueId;
    }

    // posp = match.goalsHomeTeam || match.goalsAwayTeam;
    // postponed = () => {
    //     if (post = null) {
    //         return posp = "posp"
    //     }
    // };



    componentDidMount() {
        const leagueId = this.convertPathToId();
        console.log(leagueId)
        axios
            .get(`http://localhost:8080/leagues/${leagueId}`)
            .then(res => {
                // console.log(res.data.fixtures);
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
                        <img src="" alt="" className="homepage__image" />
                    </div>
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