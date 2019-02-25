const fetch = require('node-fetch');
const twilio = require('twilio');

const TWILIO_CONFIG_JSON = JSON.parse(process.env.TWILIO_CONFIG_JSON);
function createClient() {
  const twilioAccountSid = TWILIO_CONFIG_JSON.twilio_account_sid;
  const twilioAuthToken = TWILIO_CONFIG_JSON.twilio_auth_token;
  return twilio(twilioAccountSid, twilioAuthToken);
}

// send twilio message
// see https://www.twilio.com/docs/sms/quickstart/node
function sendTextMessage(req, res) {
  const fromNumber = TWILIO_CONFIG_JSON.from_number;

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

  const client = createClient();
  client.messages.create(payload)
    .then(message => res.json({sent: true}))
    .catch(error => res.status(500).json({send: false, error}));
}


// client lib validates this is really from twilio, see https://stackoverflow.com/questions/41481573/twilio-webhooks-validating-the-genuine-twilio-request
function receiveTextMessageWebhook(req, res) {
  console.log('receiveTextMessageWebhook from twilio...');
  const MessagingResponse = twilio.twiml.MessagingResponse;
  const twiml = new MessagingResponse();
  twiml.message('hey there');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
}


module.exports = {
  sendTextMessage,
  receiveTextMessageWebhook
};
