import React from 'react';
import "../matchEvents/matchEvents.scss"
import yellow from "../../assets/yellow.png"

class MatchEvents extends React.Component {

    render() {
        if (!this.props.matchEvents.responseFixture && !this.props.matchEvents.events) {
            return null
        }

        // COMPONENT UI SOON TO COME 
        // let venue = ""
        let homeLogo = ""
        let awayLogo = ""
        let awayTeamName = ""
        let { matchEvents } = this.props;
        //     console.log(this.state.matchStats.responseFixture.homeTeam.team_name);
        // awayTeamName = this.props.matchEvents.responseFixture.awayTeam.team_name
        // homeLogo = this.props.matchEvents.responseFixture.homeTeam.logo
        // awayLogo = this.props.matchEvents.responseFixture.awayTeam.logo
        // goalsHomeTeam = this.state.matchEvents.responseFixture.goalsHomeTeam
        // goalsAwayTeam = this.state.matchStats.responseFixture.goalsAwayTeam
        let venue = this.props.matchEvents.responseFixture.venue
        console.log(this.props.matchEvents)

        return (
            <section className="events">
                <div className="events__venue-halftime-wrapper">
                    <div className="events__venue">Venue: {venue}</div>
                    <div className="events__halftime">Half-Time: (2-1)</div>
                </div>
                <div className="events__timeline-wrapper">
                    <div className="events__scoreline">
                        <div className="events__home-event">
                            <div className="events__home-player-name"></div>
                            <div className="events__type"></div>
                        </div>
                        <div className="events__time">9'</div>
                        <div className="events__away-event">
                            <div className="events__type">(1-0)</div>
                            <div className="events__away-player-name">Callum Wilson</div>
                        </div>
                    </div>
                    <div className="events__scoreline">
                        <div className="events__home-event">
                            <div className="events__home-player-name">Mohammed Salah</div>
                            <div className="events__type">(1-1)</div>
                        </div>
                        <div className="events__time">25'</div>
                        <div className="events__away-event">
                            <div className="events__away-player-name"></div>
                            <div className="events__type"></div>
                        </div>
                    </div>
                    <div className="events__scoreline">
                        <div className="events__home-event">
                            <div className="events__home-player-name">Sadio Mane</div>
                            <div className="events__type">(2-1)</div>
                        </div>
                        <div className="events__time">9'</div>
                        <div className="events__away-event">
                            <div className="events__type"></div>
                            <div className="events__away-player-name"></div>
                        </div>
                    </div>
                    <div className="events__scoreline">
                        <div className="events__home-event">
                            <div className="events__home-player-name"></div>
                            <div className="events__type"></div>
                        </div>
                        <div className="events__time">9'</div>
                        <div className="events__away-event">
                            <img className="events__type-card" src={yellow}></img>
                            <div className="events__away-player-name">Nathan Ake</div>
                        </div>
                    </div>
                    <div className="events__scoreline">
                        <div className="events__home-event">
                            <div className="events__home-player-name"></div>
                            <div className="events__type"></div>
                        </div>
                        <div className="events__time">9'</div>
                        <div className="events__away-event">
                            <img className="events__type-card" src={yellow}></img>
                            <div className="events__away-player-name">Steve Cook</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MatchEvents;