import React from 'react';
import "../matchStats/matchStats.scss"
class MatchStats extends React.Component {


    render() {
        if (!this.props.matchEvents.responseFixture && !this.props.matchEvents.events) {
            return null
        }
        let { matchEvents } = this.props;
        let shotsTargetHome = this.props.matchEvents.stats["Shots on Goal"].home
        let shotsTargetAway = this.props.matchEvents.stats["Shots on Goal"].away
        let shotsHome = this.props.matchEvents.stats["Total Shots"].home
        let shotsAway = this.props.matchEvents.stats["Total Shots"].away
        let posHome = this.props.matchEvents.stats["Ball Possession"].home
        let posAway = this.props.matchEvents.stats["Ball Possession"].away
        let cornerHome = this.props.matchEvents.stats["Corner Kicks"].home
        let cornerAway = this.props.matchEvents.stats["Corner Kicks"].away
        let offsideHome = this.props.matchEvents.stats["Offsides"].home
        let offsideAway = this.props.matchEvents.stats["Offsides"].away
        let yellowHome = this.props.matchEvents.stats["Yellow Cards"].home
        let yellowAway = this.props.matchEvents.stats["Yellow Cards"].away
        let redHome = this.props.matchEvents.stats["Red Cards"].home
        let redAway = this.props.matchEvents.stats["Red Cards"].away
        return (
            <section className="stats">
                <div className="stats__stat-wrapper">
                    <div className="stats__team">{shotsHome}</div>
                    <div className="stats__type">Shots</div>
                    <div className="stats__team">{shotsAway}</div>
                </div>
                <div className="stats__stat-wrapper">
                    <div className="stats__team">{shotsTargetHome}</div>
                    <div className="stats__type">Shots On Target</div>
                    <div className="stats__team">{shotsTargetAway}</div>
                </div>
                <div className="stats__stat-wrapper">
                    <div className="stats__team">{posHome}</div>
                    <div className="stats__type">Possession</div>
                    <div className="stats__team">{posAway}</div>
                </div>
                <div className="stats__stat-wrapper">
                    <div className="stats__team">{cornerHome}</div>
                    <div className="stats__type">Corner Kicks</div>
                    <div className="stats__team">{cornerAway}</div>
                </div>
                <div className="stats__stat-wrapper">
                    <div className="stats__team">{offsideHome}</div>
                    <div className="stats__type">Offsides</div>
                    <div className="stats__team">{offsideAway}</div>
                </div>
                <div className="stats__stat-wrapper">
                    <div className="stats__team">{yellowHome}</div>
                    <div className="stats__type">Yellow Cards</div>
                    <div className="stats__team">{yellowAway}</div>
                </div>
                <div className="stats__stat-wrapper">
                    <div className="stats__team">0</div>
                    <div className="stats__type">Red Cards</div>
                    <div className="stats__team">0</div>
                </div>
            </section>
        );
    }
}

export default MatchStats;