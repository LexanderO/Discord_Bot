const Discord = require ('discord.js');
const client = new Discord.Client();
const {d_token} = require ('./config.json');

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
});

client.login(d_token);