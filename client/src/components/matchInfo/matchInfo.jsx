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
        matchStats: {},
        matchEvents: {},
        matchLineups: {}
    };

    componentDidMount() {

        //     const [matchStats, matchLineups] = await Promise.all([
        //         axios({
        //             "method": "GET",
        //             "url": "https://api-football-v1.p.rapidapi.com/lineups/292853",
        //             "headers": {
        //                 "content-type": "application/octet-stream",
        //                 "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        //                 "x-rapidapi-key": "6b5ca05e55mshb0e3216e47a54acp1192aajsna0ef871f4f24"
        //             }
        //         }),
        //         axios({
        //             "method": "GET",
        //             "url": "https://api-football-v1.p.rapidapi.com/statistics/fixture/292853",
        //             "headers": {
        //                 "content-type": "application/octet-stream",
        //                 "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        //                 "x-rapidapi-key": "6b5ca05e55mshb0e3216e47a54acp1192aajsna0ef871f4f24"
        //             }
        //         })
        //     ])
        //         .then(res => {
        //             console.log(res);
        //             const matchStats = res.data.api.statistics;
        //             const matchLineups = res.data.api.lineUps;
        //             this.setState({
        //                 // matchEvents: matchEvents,
        //                 matchStats: matchStats,
        //                 matchLineups: matchLineups
        //             });

        //         });



        // }
        axios
            .get(`http://localhost:8080/match/${this.props.match}`)
            .then(res => {
                // console.log(res.data.api);
                const matchStats = res.data.api.statistics;
                console.log(matchStats);
                this.setState({ matchStats: matchStats });
                return axios.get(`http://localhost:8080/match/${this.props.match}`)
            })
            .then(res => {
                const matchLineups = res.data.api.lineUps;
                console.log(res.data.api.lineUps);
                this.setState({ matchLineups: matchLineups });
            });
    }

    handleTabChange = (currTab) => {
        this.setState({ currTab: currTab });

    }

    render() {
        // keep state of the current tab 
        // match info nav will trigger a hanlder and update the state 
        console.log(this.state);
        const { match } = this.props
        console.log({ match });
        console.log(this.props.location.name);
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

                {this.state.currTab === 'info' && <MatchEvents events={this.state.matchEvents} />}
                {this.state.currTab === 'stats' && <MatchStats stats={this.state.matchStats} />}
                {this.state.currTab === 'lineup' && <MatchLineups events={this.state.matchEvents} />}
            </section>
        );
    }
}

export default MatchInfo;