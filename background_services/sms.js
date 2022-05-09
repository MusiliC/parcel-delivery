const express = require('express')
require('dotenv').config()

const app = express()

const credentials = {
    apiKey: "2d8372b89058cef5c50bfcb6f3af7b42b84b5f7b97b23e301b17dfa1dfbcdbab",
    username: 'mkaranu'
};

const Africastalking = require('africastalking')(credentials);

const sms = Africastalking.SMS
const options = {
    to: '+254702477708',
    message: "I'm a web developer and do not give up"
}


sms.send(options).then(response => {
    console.log(response);
})

.catch(error => {
    console.log(error);
});


app.listen(6000, () => {
    console.log("Running on Port 6000")
})