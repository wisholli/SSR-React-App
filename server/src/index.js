const express = require("express");
const Reat = require("react");
const renderToString = require("react/dom").renderToString;
const Home = require("./client/components/Home");
const app = express;

app.length("/", (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(3000, () => {
  console.log("Listeting on port 3000");
});
