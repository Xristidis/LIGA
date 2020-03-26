import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Lobby from "../src/components/lobby/Lobby";
import Homepage from "../src/components/homepage/Homepage";
import MatchInfo from './components/matchInfo/matchInfo';
import Navbar from './components/navbar/Navbar';
// i install npm i scss or should it be npm i node scss?

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Lobby} />
          <Route path="/premier-league" component={Homepage} />
          <Route path="/la-liga" component={Homepage} />
          <Route path="/champions-league" component={Homepage} />
          <Route path="/match/:match" component={MatchInfo} />
        </Switch>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
