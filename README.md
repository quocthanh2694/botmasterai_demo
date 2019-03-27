kieu_dev1
thanh_dev 1
# Bot MasterAI Demo with Zalo Sdk
Tutorial demo chatbot with BotMasterAI and zalo sdk

## Step 1
- Run `npm install`
- Update your information bellow in **index.js**:

--**Facebook Messenger**
```
process.env.verifyToken,
process.env.pageToken,
process.env.fbAppSecret,
```
--**zalo**
```
process.env.oaid
process.env.secretkey
```
## Step 2
- Run `npm start` and then you'll see in log: **My express app is listening and its server is used in Botmaster**.
- Your messsenger webhook link is: `/messenger/webhookfb`. 
- Your zalo webhook is: `/webhookzl`.
- You can use `ngrok` for export localhost on the internet and put in to your FB Messenger / zalo accounts.

## References
- [Bot MasterAI](http://botmasterai.com/documentation/latest/)
- [Facebook Developers](http://developers.facebook.com)
