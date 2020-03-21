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
                    <div className="stats__type">SOT</div>
                    <div className="stats__team">{stats["Shots on Goal"].home}</div>
                </div>
            </section>
        );
    }
}

export default MatchStats;