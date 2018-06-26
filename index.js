const Botmaster = require('botmaster');
var ZaloOA = require('zalo-sdk').ZaloOA;
const MessengerBot = require('botmaster-messenger');
const express = require('express');
const app = express();

var zaConfig = {
    oaid: process.env.oaid,
    secretkey: process.env.secretkey
}
var ZOAClient = new ZaloOA(zaConfig);
// zalo 
app.get('/webhookzl', (req, res) => {
    console.log(req.query.fromuid);
    var date = new Date();
    ZOAClient.api('sendmessage/text', 'POST', {
        uid: req.query.fromuid, message: 'Hi, you say: ' + req.query.message + '.'
    }, function (response) {
        // console.log(response);
    });

    res.send('receive method');
})



// express server
const myServer = app.listen(process.env.PORT || 3000, process.env.address);
const botmaster = new Botmaster({ server: myServer });
myServer.on('listening', () => {
    console.log('My express app is listening and its server is used in Botmaster');
})



// bot master
const messengerSettings = {
    credentials: {
        verifyToken: process.env.verifyToken,
        pageToken: process.env.pageToken,
        fbAppSecret: process.env.fbAppSecret,
    },
    webhookEndpoint: 'webhookfb', // messenger/webhookfb
};

const messengerBot = new MessengerBot(messengerSettings);

botmaster.addBot(messengerBot);

botmaster.use({
    type: 'incoming',
    name: 'my-incoming-middleware',
    controller: (bot, update) => {
        console.log(update);
        return bot.reply(update, 'Hi, You say: ' + update.message.text + '.');
    }
});
console.log(botmaster);


