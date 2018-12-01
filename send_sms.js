
require('dotenv').config();
var keys = require('./keys.js');
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = keys.twilio.id;
const authToken = keys.twilio.token;
const client = require('twilio')(accountSid, authToken);
var request = require("request")
var CronJob = require('cron').CronJob;

var url = "https://moodster.herokuapp.com/api/user"
var phoneNumberArray = [];
var userIdArray = [];
var userNameArray = [];
var clientMessages = [];

request({
  url: url,
  json: true
}, function (error, response, body) {

  if (!error && response.statusCode === 200) {
    // console.log(body) // Print the json response
    var userData = body;
  }
for(i=0;i<userData.length;i++){
  userNameArray.push(userData[i].person_name);
  phoneNumberArray.push(userData[i].phone_number);
  userIdArray.push(userData[i].id);
};
console.log(userNameArray);
console.log(phoneNumberArray);
console.log(userIdArray);
});
const job = new CronJob('* * * * *', function () {
  console.log("userNameArray: " + userNameArray)
for(i=0;i<userIdArray.length;i++){
  client.messages
    .create({
      body: 'How are you feeling ' + userNameArray[i] + '? Click below to tell Moodster!\nhttp://www.moodster.herokuapp.com/' + userIdArray[i] + '/entry',
      from: '+18046550859',
      to: '+1' + phoneNumberArray[i]
    })
    .then(message => console.log(message.sid))
    .done();
  const d = new Date();
  console.log('onTick:', d);
  console.log(phoneNumberArray[i]);
  }
});
module.exports = {
  job: job
};
