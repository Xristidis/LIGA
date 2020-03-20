const express = require("express");
const axios = require("axios");
const router = express.Router();
const fs = require('fs');
// get request at generatefixtures url
const scoresFilePath = './data/scores.json';
const dataFilePath = require('../data/data.json');

//then create another route that pull fixtures from that.json file
//  fixtures/ root route and fixtures/generate is where data is refreshed. 
// const data = {}
const newScoresObj = { matchData: [] };

router.get("/fixtures/generate", (_, res) => {
    Promise.all([
        // EPL BELOW
        axios({
            "method": "GET",
            "url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/last/10",
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
            "url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/775/last/10",
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
            "url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/530/last/10",
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
            newScoresObj.matchData = [newScoresObj.matchData, ...responseData.data.api.fixtures]
        })
        fs.writeFile(scoresFilePath, JSON.stringify(newScoresObj), err => {
            if (err) return res.status(409).send("File not saved"); // find right error code 
            console.log("scores saved!");
        });
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

module.exports = router;