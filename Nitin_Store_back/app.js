require("dotenv").config();
const express = require("express");
const app = express();
const mainRoute = require("./src/router")
const host = process.env.HOST;
const port = process.env.PORT;


app.use(express.json());
app.use("/api", mainRoute);

app.get("/", (req, res) => {
    res.json({
        status: true
    });
});


app.listen(port, () => {
    console.log(`Server running on ${host}:${port}`);
})