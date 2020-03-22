import React from 'react';
import "../matchStats/matchStats.scss"
class MatchStats extends React.Component {

    state = {

    };
    render() {

        const { stats } = this.props;
        return (
            <section className="stats">
                <div className="stats__stat-wrapper">
                    <div className="stats__team">{stats["Shots on Goal"].home}</div>
                    <div className="stats__type">Shots On Target</div>
                    <div className="stats__team">{stats["Shots on Goal"].away}</div>
                </div>
                <div className="stats__stat-wrapper">
                    <div className="stats__team">{stats["Shots off Goal"].home}</div>
                    <div className="stats__type">Shots off Target</div>
                    <div className="stats__team">{stats["Shots off Goal"].away}</div>
                </div>
                <div className="stats__stat-wrapper">
                    <div className="stats__team">{stats["Ball Possession"].home}</div>
                    <div className="stats__type">Possession</div>
                    <div className="stats__team">{stats["Ball Possession"].away}</div>
                </div>
            </section>
        );
    }
}

export default MatchStats;