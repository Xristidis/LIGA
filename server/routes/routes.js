// please ignore extra routes and json data files in folder tree as they are for phase 2 testing.

const express = require("express");
const axios = require("axios");
const router = express.Router();
const fs = require('fs');
const scoresFilePath = require('../data/scores.json');
const dataFilePath = require('../data/data.json');
const statsFilePath = require('../data/cl-8th.json');
const lineUpsFilePath = require('../data/lineUps.json');

const newScoresObj = { matchData: [] };

router.get("/fixtures/generate", (_, res) => {
    var jsonData = { "leagues": [] };
    Promise.all([
        // EPL BELOW
        axios({
            "method": "GET",
            "url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/2020-03-08",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "6b5ca05e55mshb0e3216e47a54acp1192aajsna0ef871f4f24"
            }, "params": {
                "timezone": "Europe/London"
            }
        }),
        // // LA LIGA BELOW
        axios({
            "method": "GET",
            "url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/775/2020-03-08",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "6b5ca05e55mshb0e3216e47a54acp1192aajsna0ef871f4f24"
            }, "params": {
                "timezone": "Europe/London"
            }
        }),
        // // CL BELOW
        axios({
            "method": "GET",
            "url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/530/8th_Finals",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "6b5ca05e55mshb0e3216e47a54acp1192aajsna0ef871f4f24"
            }, "params": {
                "timezone": "Europe/London"
            }
        })
    ]).then((responseLeague) => {
        responseLeague.forEach(league => {
            var league_array = [];
            Promise.all(league.data.api.fixtures.slice(0).map(responseFixture => {
                const fixture = { responseFixture }
                // EPL BELOW
                return axios({
                    "method": "GET",
                    "url": "https://api-football-v1.p.rapidapi.com/v2/lineUps/" + responseFixture.fixture_id,
                    "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                        "x-rapidapi-key": "6b5ca05e55mshb0e3216e47a54acp1192aajsna0ef871f4f24"
                    }, "params": {
                        "timezone": "Europe/London"
                    }
                }).then((lineUps) => {
                    console.log(lineUps.data.api.lineUps)
                    // console.log("lineUps")
                    fixture.lineUps = lineUps.data.api.lineUps
                    console.log(fixture);
                    return axios({
                        "method": "GET",
                        "url": "https://api-football-v1.p.rapidapi.com/v2/statistics/fixture/" + responseFixture.fixture_id,
                        "headers": {
                            "content-type": "application/octet-stream",
                            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                            "x-rapidapi-key": "6b5ca05e55mshb0e3216e47a54acp1192aajsna0ef871f4f24"
                        }, "params": {
                            "timezone": "Europe/London"
                        }
                    })  // TOGGLE THIS FOR DIFF API CALLS
                }).then((stats) => {
                    console.log(stats.data)
                    console.log("stats")
                    fixture.stats = stats.data.api.statistics
                    return axios({
                        "method": "GET",
                        "url": "https://api-football-v1.p.rapidapi.com/v2/events/" + responseFixture.fixture_id,
                        "headers": {
                            "content-type": "application/octet-stream",
                            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                            "x-rapidapi-key": "6b5ca05e55mshb0e3216e47a54acp1192aajsna0ef871f4f24"
                        }, "params": {
                            "timezone": "Europe/London"
                        }
                    })
                }).then((events) => {
                    console.log(events.data.api.events)
                    console.log("events")
                    fixture.events = events.data.api.events
                    return fixture;
                }).catch(err => {
                    res.status(400).send("Could not fetch data")
                    console.log(err)
                })
            })).then((leagueArray) => {
                jsonData.leagues = leagueArray
                fs.writeFile(scoresFilePath, JSON.stringify(jsonData, null, 2), (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
            })
        })
    })
        .catch(err => {
            res.status(400).send("Could not fetch data")
            console.log(err)
        })
});

//////////////////////LEAGUE ID & DATA///////////////////////////
router.get('/leagues/:id', (req, res) => {
    // console.log(req.params.id);
    res.json(dataFilePath.find(league => {

        return req.params.id === league.league_id;
    })
    );
});

//////////////////////MATCH ID & DATA///////////////////////////
router.get('/match/:fixture_id', (req, res) => {
    const fixture = scoresFilePath.leagues.find(object => {
        return parseInt(req.params.fixture_id) === parseInt(object.responseFixture.fixture_id);
    })
    console.log(fixture)
    res.json(fixture)
});

module.exports = router;