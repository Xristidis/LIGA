import React from 'react';
import "../matchInfoNav/matchInfoNav.scss"
class MatchInfoNav extends React.Component {
    render() {

        // const { match } = this.props
        return (
            <section className="match-info-nav">
                <div className="fixture__info">Match Info</div>
                <div className="fixture__statistics">Statistics</div>
                <div className="fixture__lineups">Line-Ups</div>
            </section>
        );
    }
}

export default MatchInfoNav;