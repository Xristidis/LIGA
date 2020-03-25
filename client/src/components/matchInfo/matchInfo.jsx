import React from 'react';
import "../matchInfo/matchInfo.scss"
import MatchInfoNav from '../matchInfoNav/MatchInfoNav';
import Navbar from "../navbar/Navbar"
import MatchEvents from '../matchEvents/MatchEvents';
import MatchStats from '../matchStats/MatchStats';
import MatchLineups from '../matchLineups/MatchLineups';
import axios from "axios";



class MatchInfo extends React.Component {

    state = {
        currTab: "stats",
        matchStats: {},
    };

    componentDidMount() {
        // console.log(this.props.match.params.match);
        axios
            .get(`http://localhost:8080/match/${this.props.match.params.match}`)
            .then(res => {
                const matchStats = res.data;
                // console.log(matchStats);
                this.setState({ matchStats: matchStats });
            });
    }

    handleTabChange = (currTab) => {
        this.setState({ currTab: currTab });

    }


    render() {
        let homeTeamName = ""
        let awayTeamName = ""
        let homeLogo = ""
        let awayLogo = ""
        let goalsHomeTeam = ""
        let goalsAwayTeam = ""

        if (this.state.matchStats.responseFixture !== undefined) {
            // console.log(this.state.matchStats.responseFixture.homeTeam.team_name);
            homeTeamName = this.state.matchStats.responseFixture.homeTeam.team_name
            awayTeamName = this.state.matchStats.responseFixture.awayTeam.team_name
            homeLogo = this.state.matchStats.responseFixture.homeTeam.logo
            awayLogo = this.state.matchStats.responseFixture.awayTeam.logo
            goalsHomeTeam = this.state.matchStats.responseFixture.goalsHomeTeam
            goalsAwayTeam = this.state.matchStats.responseFixture.goalsAwayTeam
            console.log(this.state.matchStats)
        }
        else {
            // console.log("hello");
        }
        // console.log(homeTeamName);
        const { match } = this.props

        return (
            <section className="matchInfo-wrapper">
                <div className="matchInfo">
                    <div className="matchInfo__team-wrapper">
                        <img className="matchInfo__team-logo" src={homeLogo} />
                        <div className="matchInfo__team-name">{homeTeamName}</div>
                    </div>
                    <div className="matchInfo__details-wrapper">
                        <div className="matchInfo__date"></div>
                        <div className="matchInfo__score-wrapper">
                            <div className="matchInfo__home-score">{goalsHomeTeam}</div>
                            <div>-</div>
                            <div className="matchInfo__away-score">{goalsAwayTeam}</div>
                        </div>
                    </div>
                    <div className="matchInfo__team-wrapper">
                        <img className="matchInfo__team-logo" src={awayLogo} />
                        <div className="matchInfo__team-name">{awayTeamName}</div>
                    </div>
                </div>
                {/* <div className="info__teams">
                    <div className="info__home-team">Napoli</div>
                    <div className="info__away-team">Barcelona</div>
                </div>
                <div className="info__scoreline">
                    <div className="info__home-score">2</div>
                    <div className="info__away-score">0</div>
                </div> */}
                <MatchInfoNav handleTabChange={this.handleTabChange} />

                {/* {this.state.currTab === 'info' && <MatchEvents matchEvents={this.state.matchStats} />} */}
                {this.state.currTab === 'stats' && <MatchStats matchEvents={this.state.matchStats} />}
                {this.state.currTab === 'lineup' && <MatchLineups matchEvents={this.state.matchStats} />}
                <Navbar />
            </section>
        );
    }
}

export default MatchInfo;