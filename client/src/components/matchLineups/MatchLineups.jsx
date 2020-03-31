import React from 'react';
import "../matchLineups/matchLineups.scss"
class MatchLineups extends React.Component {

    render() {

        let homeTeamName = this.props.matchEvents.responseFixture.homeTeam.team_name
        let awayTeamName = this.props.matchEvents.responseFixture.awayTeam.team_name
        let homeLogo = this.props.matchEvents.responseFixture.homeTeam.logo
        let awayLogo = this.props.matchEvents.responseFixture.awayTeam.logo
        let homeFormation = this.props.matchEvents.lineups[homeTeamName].formation
        let awayFormation = this.props.matchEvents.lineups[awayTeamName].formation
        let { matchEvents } = this.props;
        console.log(this.props.matchEvents)
        return (
            <section className="lineups">
                <div className="lineups__team-wrapper">
                    <div className="lineups__team-heading">
                        <div className="lineups__team-heading-info">
                            <h1 className="lineups__team-name">{homeTeamName}</h1>
                            <div className="lineups__team-formation">({homeFormation})</div>
                        </div>
                        <div className="lineups__team-logo-wrapper">
                            <img className="lineups__team-logo" src={homeLogo} />
                        </div>
                    </div>
                    <div className="lineups__box-home">
                        {this.props.matchEvents.lineups[homeTeamName].startXI.map(player => {
                            return (
                                <div className="lineups__player">
                                    <div className="lineups__player-data-one">
                                        <div className="lineups__player-pos"></div>
                                        <div className="lineups__player-name">{player.player}</div>
                                    </div>
                                    <div className="lineups__player-number-wrapper">
                                        <div className="lineups__player-number">{player.number}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="lineups__team-wrapper">
                    <div className="lineups__team-heading">
                        <div className="lineups__team-heading-info">
                            <h1 className="lineups__team-name">{awayTeamName}</h1>
                            <div className="lineups__team-formation">({awayFormation})</div>
                        </div>
                        <div className="lineups__team-logo-wrapper">
                            <img className="lineups__team-logo" src={awayLogo} />
                        </div>
                    </div>
                    <div className="lineups__box-away">
                        {this.props.matchEvents.lineups[awayTeamName].startXI.map(player => {
                            return (
                                <div className="lineups__player">
                                    <div className="lineups__player-data-one">
                                        <div className="lineups__player-pos"></div>
                                        <div className="lineups__player-name">{player.player}</div>
                                    </div>
                                    <div className="lineups__player-number-wrapper">
                                        <div className="lineups__player-number">{player.number}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section >
        );
    }
}
export default MatchLineups;