import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Lobby from "../src/components/lobby/Lobby";
import Homepage from "../src/components/homepage/Homepage";
// i install npm i scss or should it be npm i node scss?

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Lobby} />
          <Route path="/england" component={Homepage} />
          <Route path="/spain" component={Homepage} />
          <Route path="/champions-league" component={Homepage} />
          {/* <Route path="/fixture/:id" component={Homepage} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
