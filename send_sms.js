require('dotenv').config();
var keys = require('./keys.js');
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = keys.twilio.id;
const authToken = keys.twilio.token;
const client = require('twilio')(accountSid, authToken);

var fourTimesADay = '* 8-20/4 * * *';
var threeTimesADay = '* 8-20/6 * * *';
var twoTimesADay = '* 8-20/12 * * *';
var phoneNumber = 8049383949;
var userId = 1;

var CronJob = require('cron').CronJob;
console.log('Before job instantiation');
const job = new CronJob(fourTimesADay, function () {
  client.messages
    .create({
      body: 'How are you feeling? Click below to tell Moodster!\nhttp://www.moodster.herokuapp.com/' + userId + '/entry',
      from: '+18046550859',
      to: '+1' + phoneNumber
    })
    .then(message => console.log(message.sid))
    .done();
  const d = new Date();
  console.log('onTick:', d);
});

// const http = require('http');
// const express = require('express');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const app = express();

// app.post('/sms', (req, res) => {
//   const twiml = new MessagingResponse();

//   twiml.message('The Robots are coming! Head for the hills!');

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });

// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });

module.exports = {
  job: job
};
