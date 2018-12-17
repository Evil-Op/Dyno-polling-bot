const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const config = require("config.json");


bot.on("ready", async () => {
    console.log(`${bot.user.username} is Online!`);
    bot.user.setGame("In the Server");

});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}report`){

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Couldnt find the user");
        let reason = args.join(" ").slice(22);
    
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#15f153")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`);
    
        message.channel.send(reportEmbed);
        return;
        
    }
});


bot.login(config.token);
