const express = require('express');
const ip = require('ip');
const app = express();

app.get("/", (req, res)=>{
    res.send(`
    <div style="text-align:center;">
    <h1 style="font-size: 250%"> Welcome to Demo App!</h1>
    <p style="font-size: 250%"> ${ip.address()} </p>
    </div>
    `);
})
app.listen("80");
