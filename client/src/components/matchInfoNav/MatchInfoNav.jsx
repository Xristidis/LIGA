import React from 'react';
import "../matchInfoNav/matchInfoNav.scss"
class MatchInfoNav extends React.Component {




    render() {

        // const { match } = this.props
        return (
            <section className="match-info-nav">
                {/* <Link className="lobby__link" to={{ */}
                {/* // pathname: "/england" */}
                {/* // }}> */}
                <div onClick={() => this.props.handleTabChange('info')} className="fixture__info">Match Info</div>
                {/* </Link> */}

                <div onClick={() => this.props.handleTabChange('stats')} className="fixture__statistics" >Statistics</div>
                <div onClick={() => this.props.handleTabChange('lineup')} className="fixture__lineups">Line-Ups</div>
            </section>
        );
    }
}

export default MatchInfoNav;

// how to display fixture info when clicking on match info
            // how to structure sibing components inside of match info 