const Discord = require ('discord.js');
const client = new Discord.Client();
const {d_token} = require ('./config.json');

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
});

client.login(d_token);

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    searhCommand(receivedMessage, primaryCommand, arguments);
 
}

function searhCommand(receivedMessage, primaryCommand, arguments){
    switch(primaryCommand){
        case "help":
            helpCommand(arguments, receivedMessage);
            break;
        case "join":
            joinCommand(receivedMessage);
            break;
        case "leave":
            leaveCommand(receivedMessage);
            break;
        default:
            receivedMessage.channel.send("I don't understand the command. Try `!help`")
    }

}

function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("It looks like you might need help with " + arguments)
    } else {
        receivedMessage.channel.send("Here is the full list of comman_{@:ds:L@L:port:90'#ds:>{~@:_____ Error: 404 Commands not Found")
    }
}

function joinCommand(receivedMessage){
    if (receivedMessage.member.voiceChannel) {
        receivedMessage.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            receivedMessage.reply('I have successfully connected to the channel!');
          })
          .catch(console.log);
      } else {
        message.reply('You need to join a voice channel first!');
    }
}

function leaveCommand(receivedMessage){
    receivedMessage.member.voiceChannel.leave()
}