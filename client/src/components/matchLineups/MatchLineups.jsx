import React from 'react';
import "../matchLineups/matchLineups.scss"
class MatchLineups extends React.Component {

    render() {

        let homeTeamName = ""
        let homeLogo = ""
        let awayLogo = ""
        let awayTeamName = ""
        // let goalsHomeTeam = ""
        // let goalsAwayTeam = ""
        //     console.log(this.state.matchStats.responseFixture.homeTeam.team_name);
        homeTeamName = this.props.matchEvents.responseFixture.homeTeam.team_name
        awayTeamName = this.props.matchEvents.responseFixture.awayTeam.team_name
        homeLogo = this.props.matchEvents.responseFixture.homeTeam.logo
        awayLogo = this.props.matchEvents.responseFixture.awayTeam.logo
        // goalsHomeTeam = this.state.matchEvents.responseFixture.goalsHomeTeam
        // goalsAwayTeam = this.state.matchStats.responseFixture.goalsAwayTeam
        let { matchEvents } = this.props;
        // console.log("HELLO")
        // console.log(this.props)
        return (
            <section className="lineups">
                <div className="lineups__team-wrapper">
                    <div className="lineups__team-heading">
                        <div className="lineups__team-heading-info">
                            <h1 className="lineups__team-name">{homeTeamName}</h1>
                            <div className="lineups__team-formation">(4-3-3)</div>
                        </div>
                        <div className="lineups__team-logo-wrapper">
                            <img className="lineups__team-logo" src={homeLogo} />
                        </div>
                    </div>
                    <div className="lineups__box-home">
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">GK</div>
                                <div className="lineups__player-name">Allison Becker</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">1</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">LB</div>
                                <div className="lineups__player-name">Andrew Robertson</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">26</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">CB</div>
                                <div className="lineups__player-name">Virgil Van Dijk</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">4</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">CB</div>
                                <div className="lineups__player-name">Joel Matip</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">32</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">RB</div>
                                <div className="lineups__player-name">Trent Alexander Arnold</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">28</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">RCM</div>
                                <div className="lineups__player-name">Jordan Henderson</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">14</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">CM</div>
                                <div className="lineups__player-name">Fabinho</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">3</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">LCM</div>
                                <div className="lineups__player-name">James Milner</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">7</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">LW</div>
                                <div className="lineups__player-name">Sadio Mane</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">10</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">RW</div>
                                <div className="lineups__player-name">Mohammed Salah</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">11</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">ST</div>
                                <div className="lineups__player-name">Roberto Firmino</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">9</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lineups__team-wrapper">
                    <div className="lineups__team-heading">
                        <div className="lineups__team-heading-info">
                            <h1 className="lineups__team-name">{awayTeamName}</h1>
                            <div className="lineups__team-formation">(4-3-3)</div>
                        </div>
                        <div className="lineups__team-logo-wrapper">
                            <img className="lineups__team-logo" src={awayLogo} />
                        </div>
                    </div>
                    <div className="lineups__box-away">
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">GK</div>
                                <div className="lineups__player-name">Aaron Ramsdale</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">12</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">LB</div>
                                <div className="lineups__player-name">Adam Smith</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">15</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">CB</div>
                                <div className="lineups__player-name">Steve Cook</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">3</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">CB</div>
                                <div className="lineups__player-name">Nathan Ake</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">5</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">RB</div>
                                <div className="lineups__player-name">Jack Stacey</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">17</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">RCM</div>
                                <div className="lineups__player-name">Phillip Billing</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">29</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">CM</div>
                                <div className="lineups__player-name">Jefferson Lerma</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">8</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">LCM</div>
                                <div className="lineups__player-name">Lewis Cook</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">16</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">LW</div>
                                <div className="lineups__player-name">Ryan Fraser</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">24</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">ST</div>
                                <div className="lineups__player-name">Callum Wilson</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">13</div>
                            </div>
                        </div>
                        <div className="lineups__player">
                            <div className="lineups__player-data-one">
                                <div className="lineups__player-pos">ST</div>
                                <div className="lineups__player-name">Junior Stanislas</div>
                            </div>
                            <div className="lineups__player-number-wrapper">
                                <div className="lineups__player-number">19</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default MatchLineups;