import React from 'react';
import "../matchInfo/matchInfo.scss"
import MatchInfoNav from '../matchInfoNav/MatchInfoNav';
class MatchInfo extends React.Component {
    render() {

        const { match } = this.props
        return (
            <section className="info">
                <div className="info__teams">
                    <div className="info__home-team">Napoli</div>
                    <div className="info__away-team">Barcelona</div>
                </div>
                <div className="info__scoreline">
                    <div className="info__home-score">2</div>
                    <div className="info__away-score">0</div>
                </div>
                <MatchInfoNav />
            </section>
        );
    }
}

export default MatchInfo;