
// const express = require('express');
// const app = express();


// // // ///// express
// app.get('/', (req, res) => {
//     // const messengerBot = new MessengerBot(messengerSettings);
//     // console.log(messengerBot);
//     res.send('Hello World!')
// });
// var listener = app.listen(process.env.PORT || 3000, process.env.address, () => {
//     console.log("Server listening at: " + listener.address().address + ":" + listener.address().port);



// });

const Botmaster = require('botmaster');

const express = require('express');
const app = express();
const myServer = app.listen(process.env.PORT || 3000, process.env.address);
const botmaster = new Botmaster({ server: myServer });
myServer.on('listening', () => {
    console.log('My express app is listening and its server is used in Botmaster');
})

// bot master

const MessengerBot = require('botmaster-messenger');
const messengerSettings = {
    credentials: {
        verifyToken: process.env.verifyToken,
        pageToken: process.env.pageToken,
        fbAppSecret: process.env.fbAppSecret,
    },
    // domain: '127.0.0.1',
    // port: process.env.PORT || 3000,
    webhookEndpoint: 'webhook', // botmaster will mount this webhook on https://Your_Domain_Name/messenger/webhook1234
};
console.log(messengerSettings);
const messengerBot = new MessengerBot(messengerSettings);

botmaster.addBot(messengerBot);

botmaster.use({
    type: 'incoming',
    name: 'my-incoming-middleware',
    controller: (bot, update) => {
        console.log(update);

        return bot.reply(update, 'Hi, You say: ' + update.message.text);
    }
});
console.log(botmaster);


