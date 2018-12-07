const Discord = require ('discord.js')
const client = new Discord.Client()

clinet.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

//insert token key 
client.login("xxxx")