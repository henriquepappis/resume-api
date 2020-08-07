const express = require('express');
require('dotenv').config();

const port = process.env.API_PORT;
const host = process.env.API_HOST;
const app = express();

const category = require("./routes/category.js");
const education = require("./routes/education.js");
const employment = require("./routes/employment.js");
const info = require("./routes/info.js");
const profile = require("./routes/profile.js");
const skill_category = require("./routes/skill_category.js");
const skill = require("./routes/skill.js");
const social = require("./routes/social.js");

app.use(category);
app.use(education);
app.use(employment);
app.use(info);
app.use(profile);
app.use(skill_category);
app.use(skill);
app.use(social);

app.get("/", function (req, res) {
  res.send('Resume API');
});

app.use((req, res) => {
  res.status(404).send('Requisição desconhecida.');
});

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);