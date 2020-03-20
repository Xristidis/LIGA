import React from 'react';
import "../match/match.scss"
class Match extends React.Component {
    render() {

        const { match } = this.props
        return (
            <section className="match">
                <div className="match__teams">
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
                </div>
            </section>
        );
    }
}

export default Match;