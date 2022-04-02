const client = require("../index")
const arrayOfStatus = ['Strefa Gaming™','Author: @Mateku__'] 

client.on('ready', async() => {
    console.log(`${client.user.tag} is now online!`) 

setInterval(() => { client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], status: 'dnd', type: "WATCHING" }) }, 5000)})