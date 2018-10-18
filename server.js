const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').load();

const app = express();
const port = process.env.PORT || 5000;

const jsonParser = bodyParser.json();
const domain = process.env.REACT_APP_MAILGUN_DOMAIN;
const apiKey = process.env.REACT_APP_MAILGUN_API_KEY;

app.post('/api/addMember', jsonParser, (req, res) => {
  if (!req) return res.sendStatus(400);

  const { address, name } = req.body.member;

  const mailgun = require('mailgun-js')({apiKey, domain});

  const list = mailgun.lists(`testing@${domain}`);

  const bob = {
    subscribed: true,
    address,
    name
  };

  list.members().create(bob, function (error, data) {
    res.send({
      member: data.member
    });
  });

});

app.listen(port, () => console.log(`Listening on port ${port}`));