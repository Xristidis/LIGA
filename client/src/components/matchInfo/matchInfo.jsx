import React from 'react';
import "../matchInfo/matchInfo.scss"
import MatchInfoNav from '../matchInfoNav/MatchInfoNav';
import MatchEvents from '../matchEvents/MatchEvents';
import MatchStats from '../matchStats/MatchStats';
import MatchLineups from '../matchLineups/MatchLineups';
import axios from "axios";



class MatchInfo extends React.Component {

    state = {
        currTab: "info",
        matchStats: {}
    };

    componentDidMount() {
        axios
            .get(`http://localhost:8080/match`)
            .then(res => {
                // console.log(res.data.api);
                const matchStats = res.data.api.statistics;
                this.setState({ matchStats: matchStats });
            });
    }

    handleTabChange = (currTab) => {
        this.setState({ currTab: currTab });

    }

    render() {
        // keep state of the current tab 
        // match info nav will trigger a hanlder and update the state 
        console.log(this.state.matchStats);
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
                <MatchInfoNav handleTabChange={this.handleTabChange} />

                {this.state.currTab === 'info' && <MatchEvents />}
                {this.state.currTab === 'stats' && <MatchStats stats={this.state.matchStats} />}
                {this.state.currTab === 'lineup' && <MatchLineups />}
            </section>
        );
    }
}

export default MatchInfo;