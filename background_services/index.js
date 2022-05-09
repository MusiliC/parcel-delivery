require('dotenv').config()
const express = require('express')
const app = express()
const registerIt = require('./emailService/registration')
const cron = require('node-cron')

const run = async => {
    cron.schedule('*/30 * * * * *', async() => {
        console.log("nodeMailer running");
        await registerIt()
    })
}

run()
const PORT = 5000
app.listen(PORT, () => console.log(`Service running on port: ${PORT}`))