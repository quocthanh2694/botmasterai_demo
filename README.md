# Bot MasterAI Demo
Tutorial demo chatbot with BotMasterAI  and facebook messenger

## Step 1
- Run `npm install`
- Update your information bellow in **index.js**:
```
verifyToken: process.env.verifyToken,
pageToken: process.env.pageToken,
fbAppSecret: process.env.fbAppSecret,
```
## Step 2
- Run `npm start` and then you'll see in log: **My express app is listening and its server is used in Botmaster**.
- If your open this link `localhost:3000/messenger/webhook` on browser you will see text: "Error, wrong validation token".
- Your link webhook will be: `localhost:3000/messenger/webhook`. 
- You can use `ngrok` for export localhost on the internet and put in to your FB Messenger webhook page.

## References
- [Bot MasterAI](http://botmasterai.com/documentation/latest/)
- [Facebook Developers](http://developers.facebook.com)
