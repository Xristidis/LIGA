import React from 'react';
import "../match/match.scss"
import { Link } from "react-router-dom";
class Match extends React.Component {

    render() {
        const { match } = this.props
        return (
            <Link className="match" to={{
                pathname: `/match/${match.fixture_id}`
            }}>
                <div className="match__team-wrapper">
                    <img className="match__team-logo" src={match.homeTeam.logo} />
                    <div className="match__team-name">{match.homeTeam.team_name}</div>
                </div>
                <div className="match__details-wrapper">
                    <div className="match__date">March 7th, 2020</div>
                    <div className="match__score-wrapper">
                        <div className="match__home-score">{match.goalsHomeTeam}</div>
                        <div>-</div>
                        <div className="match__away-score">{match.goalsAwayTeam}</div>
                    </div>
                </div>
                <div className="match__team-wrapper">
                    <img className="match__team-logo" src={match.awayTeam.logo} />
                    <div className="match__team-name">{match.awayTeam.team_name}</div>
                </div>

                {/* <div className="match__teams">
                    <div className="match__home-team">{match.homeTeam.team_name}</div>
                    <div className="match__away-team">{match.awayTeam.team_name}</div>
                </div>
                <div className="match__score-fav-wrapper">
                    <div className="match__tscore">
                        <div className="match__home-score">{match.goalsHomeTeam}</div>
                        <div className="match__away-score">{match.goalsAwayTeam}</div>
                    </div>
                    <div className="match__favourite-wrapper">
                        <div src="" alt="" className="match__favourite-img"></div>
                    </div>
                </div> */}
            </Link>

            //1. how do i send { match } to matchInfo.jsx?
        );
    }
}

export default Match;