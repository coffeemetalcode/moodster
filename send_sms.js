require('dotenv').config();
var keys = require('./keys.js');
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = keys.twilio.id;
const authToken = keys.twilio.token;
const client = require('twilio')(accountSid, authToken);



var CronJob = require('cron').CronJob;
console.log('Before job instantiation');
const job = new CronJob('00 45 13 * * *', function () {
  client.messages
    .create({
      body: 'How are you feeling? Click below to tell Moodster!\nhttp://www.moodster.io',
      from: '+18046550859',
      to: '+18049383949'
    })
    .then(message => console.log(message.sid))
    .done();
  const d = new Date();
  console.log('onTick:', d);
});
console.log('After job instantiation');
job.start();

const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});