const fetch = require('node-fetch');
const twilio = require('twilio');


// send twilio message
// see https://www.twilio.com/docs/sms/quickstart/node
const TWILIO_CONFIG_JSON = JSON.parse(process.env.TWILIO_CONFIG_JSON);
function sendTextMessage(req, res) {
  const fromNumber = TWILIO_CONFIG_JSON.from_number;
  const twilioAccountSid = TWILIO_CONFIG_JSON.twilio_account_sid;
  const twilioAuthToken = TWILIO_CONFIG_JSON.twilio_auth_token;
  const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

  // check content
  const messageBody = req.body.message;
  const toNumber = req.body.number;
  const safelistNumbers = TWILIO_CONFIG_JSON.send_safelist || [];
  if (safelistNumbers.indexOf(toNumber) === -1) {
    console.log('blocked because of safelist.');
    return res.status(422).json({sent: false, blocked: true});
  }

  console.log('sendTextMessage is creating a message...');
  const payload = {
    body: messageBody,
    from: fromNumber,
    to: toNumber
  };

  twilioClient.messages.create(payload)
    .then(message => res.json({sent: true}))
    .catch(error => res.status(500).json({send: false, error}));
}


module.exports = {sendTextMessage};