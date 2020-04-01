const express = require("express");
const axios = require("axios");
const router = express.Router();
const fs = require('fs');
// get request at generatefixtures url
const scoresFilePath = './data/scores.json';
const dataFilePath = require('../data/data.json');
const statsFilePath = require('../data/stats.json');
const lineupsFilePath = require('../data/lineups.json');

//then create another route that pull fixtures from that.json file
//  fixtures/ root route and fixtures/generate is where data is refreshed. 
// const data = {}
const newScoresObj = { matchData: [] };

router.get("/fixtures/generate", (_, res) => {
    // console.log("hello")
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
        // LA LIGA BELOW
        axios({
            "method": "GET",
            "url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/775/2020-03-07",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "6b5ca05e55mshb0e3216e47a54acp1192aajsna0ef871f4f24"
            }, "params": {
                "timezone": "Europe/London"
            }
        }),
        // CL BELOW
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
    ]).then((response) => {
        response.forEach(responseData => {

            rescount = 0
            var league_array = [];
            responseData.data.api.fixtures.forEach(responseFixture => {
                const fixture = { responseFixture }

                subresponse_counter = 0

                if (rescount <= 1) {
                    // console.log(responseFixture.fixture_id)
                    Promise.all([
                        // EPL BELOW
                        axios({
                            "method": "GET",
                            "url": "https://api-football-v1.p.rapidapi.com/v2/lineups/" + responseFixture.fixture_id,
                            "headers": {
                                "content-type": "application/octet-stream",
                                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                                "x-rapidapi-key": "6b5ca05e55mshb0e3216e47a54acp1192aajsna0ef871f4f24"
                            }, "params": {
                                "timezone": "Europe/London"
                            }
                        }),
                        // LA LIGA BELOW
                        axios({
                            "method": "GET",
                            "url": "https://api-football-v1.p.rapidapi.com/v2/statistics/fixture/" + responseFixture.fixture_id,
                            "headers": {
                                "content-type": "application/octet-stream",
                                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                                "x-rapidapi-key": "6b5ca05e55mshb0e3216e47a54acp1192aajsna0ef871f4f24"
                            }, "params": {
                                "timezone": "Europe/London"
                            }
                        }),
                        // CL BELOW
                        axios({
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
                    ]).then((responseAll) => {
                        // console.log("103");
                        responseAll.forEach(pearNectar => {
                            // console.log('eeeeeeee')
                            // console.log(fixture)
                            if (subresponse_counter == 0) {
                                fixture.events = pearNectar.data
                            } else if (subresponse_counter == 1) {
                                fixture.stats = pearNectar.data
                            } else if (subresponse_counter == 2) {
                                fixture.lineups = pearNectar.data
                            }
                            league_array.push(fixture);
                            subresponse_counter++
                        })
                        jsonData.leagues = league_array
                        fs.writeFile(scoresFilePath, JSON.stringify(jsonData, null, 2), (err) => {
                            if (err) throw err;
                            console.log('The file has been saved!');
                        });
                    }).catch(err => {
                        res.status(400).send("Could not fetch data")
                        console.log(err)
                    })
                }
                // i need to debugger here
                // league_array is empty, seems to be being overwritten at some point

                rescount++
            })

        })
        console.log('imaddata')
        console.log(jsonData)
        // console.log('imajson')
        // console.log(JSON.stringify(jsonData))

        // response.forEach(responseData => {
        //     newScoresObj.matchData = [newScoresObj.matchData, ...responseData.data.api.fixtures]
        // })
        // fs.writeFile(scoresFilePath, JSON.stringify(newScoresObj), err => {
        //     if (err) return res.status(409).send("File not saved"); // find right error code 
        //     console.log("scores saved!");
        // });
    })
        .catch(err => {
            res.status(400).send("Could not fetch data")
            console.log(err)
        })
});

//////////////////////LEAGUE ID///////////////////////////
router.get('/leagues/:id', (req, res) => {
    // console.log(req.params.id);
    res.json(dataFilePath.find(league => {

        return req.params.id === league.league_id;
    })
    );
});

router.get('/match/:fixture_id', (req, res) => {
    // console.log(req.params.id);

    res.json(statsFilePath)
});

router.get('/match/:fixture_id', (req, res) => {
    // console.log(req.params.id);
    res.json(lineupsFilePath)
});

// router.get('/leagues/:id/fixture/:id', (req, res) => {
//     // console.log(req.params.id);
//     res.json(scoresFilePath)
// });
// for fixture data

module.exports = router;