import React from 'react';
import "../matchLineups/matchLineups.scss"
class MatchLineups extends React.Component {

    state = {

    };
    render() {
        const { lineups } = this.props;
        return (
            <section className="info">
                {/* <div className="stats__stat-wrapper">
                    <div className="stats__team">{lineups.startXI}</div>
                    <div className="stats__type">Shots On Target</div>
                    <div className="stats__team">{stats["Shots on Goal"].away}</div>
                </div> */}
            </section>
        );
    }
}

export default MatchLineups;