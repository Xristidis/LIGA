const express = require("express");
const axios = require("axios");
const router = express.Router();
const fs = require('fs');
// get request at generatefixtures url
const scoresFilePath = './data/scores.json';

//then create another route that pull fixtures from that.json file
//  fixtures/ root route and fixtures/generate is where data is refreshed. 
// const data = {}
const newScoresObj = { matchData: [] };

const readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(scoresFilePath, (err, data) => {
            if (err) reject(err);
            // Parse data as JSON before returning
            return resolve(JSON.parse(data));
        });
    });
}

const writeFile = data => {
    return new Promise((resolve, reject) => {
        // Stringify JS data before writing it to file
        fs.writeFile(scoresFilePath, JSON.stringify(data), err => {
            if (err) reject(err);
            // Send back data passed to the function
            return resolve(data);
        });
    });
}
router.get("/fixtures/generate", (_, res) => {
    Promise.all(
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
            .then((response) => {
                fs.writeFile(scoresFilePath, JSON.stringify(response.data.api.fixtures), err => {
                    if (err) return res.status(409).send("File not saved"); // find right error code 
                    return
                    console.log("scores saved!");
                    // const newScoresObj = response.data.api.fixtures
                    //     writeFile(newScoresObj).then(data => resolve(data));
                    // does not work with function invokation due to unhandled promise rejection?
                });
            })
            .catch(err => res.status(400).send("Could not fetch data"))
    )

});

// // Write data to recipes file and return back 


// const getScores = query => {
//     return new Promise(resolve => {
//         // If file exists already read it
//         if (fs.existsSync(scoresFilePath)) {
//             return readFile().then(data => {
//                 // Filter scores based on the query passed and return them
//                 const filteredScores = filterScores(data, query);
//                 resolve(filteredScores);
//             });
//         } else {
//             // Create a recipes file with initialized recipe object
//             writeFile(initialScoresObj).then(data => resolve(data));
//         }
//     });
// }

// // Get request for recipes that takes
// // optional :category param and area query param
// router.get('/fixtures', (req, res) => {
//     getScores({
//         category: req.params.category,
//         area: req.query.area
//     }).then(data => {
//         return res.status(200).send(data);
//     }).catch(err => { throw err; });
// });


// router.get("/warehouses/:id", (req, res) => {
//     console.log(req.params.id)
//     let warehouseCheck = allWarehouses.find(item => {
//         return req.params.id == item.id
//     })
//     if (warehouseCheck == undefined) {
//         res.status(400).send('error')
//     } else {
//         let warehouseInv = allInventory.filter(item => {
//             return item.warehouseId === req.params.id;
//         });
//         res.json({ warehouseCheck, warehouseInv });

//     }
//     console.log(warehouseCheck)
// })


// router.get("/inventory/:id", (req, res) => {
//     if (
//         allInventory.find(item => {
//             return req.params.id == item.id;
//         })
//     ) {
//         res.json(
//             allInventory.find(item => {
//                 return req.params.id == item.id;
//             })
//         );
//     } else {
//         res.status(404).send({
//             success: false,
//             message: `ID:${inventId} not match any item.`
//         });
//     }
// });

module.exports = router;
