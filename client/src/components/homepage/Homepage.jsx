import React from "react";
import Navbar from "../navbar/Navbar";
import "../homepage/homepage.scss"


class Homepage extends React.Component {

    state = {
        matchList: []
    };
    componentDidMount() {


    }


    componentDidUpdate(prevProps) {


    }

    render() {
        return (
            <main className="homepage">
                <div className="homepage__wrapper">
                    <div className="homepage__image-wrapper">
                        <img src="" alt="" className="homepage__image" />
                    </div>
                    {/* have to map the corresponding leagues based on which league is clicked */}
                    <Match />
                </div>
                <Navbar />
            </main>
        );
    }
}

export default Homepage;