"use strict" /*"Força o Javascript a ser mais criterioso"*/;

const http = require("http");
const debug = require("debug")("nodestr:server");
const express = require("express");

const app = express();
const port = 3000;

app.set("port", port);

app.listen(port, () => {
  console.log("Server is on port " + port);
});
