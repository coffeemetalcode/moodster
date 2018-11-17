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