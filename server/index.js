const express = require("express");
const port = process.env.PORT || 8080;
const cors = require("cors");
const app = express();
const routes = require("./routes/routes");
const axios = require("axios");

app.use(cors());
app.use(express.json());
app.use("/", routes);



app.listen(8080, () => {
    console.log(`on port ${port}`);
});