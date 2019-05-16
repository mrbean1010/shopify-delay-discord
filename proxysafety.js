const Discord = require('discord.js');

const client = new Discord.Client();
const token = 'YOUR TOKEN HERE';

console.log('Starting...');
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! Created by Mr.Bean#0885`);
});

const defaultCMD = "!delay";
client.on('message', function(message) {
    if(message.content.indexOf(defaultCMD)==0){ 
        let delayNumbers = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
        
        let delayArray = delayNumbers.split(" ");

        let proxy = delayArray[0];
        let task = delayArray[1];

        let pdt = proxy/task;

        let recDelay = 3500/pdt;

        function round(value) {
            return Number(Math.round(value + 'e' + 2) + 'e-' + 2);
        } 

        recDelay = round(recDelay);
        
        console.log(recDelay);
        //Create embed
        const embed = new Discord.RichEmbed()
        .setTitle("How it Works")
        .setAuthor("Shopify Recommended Delay Calculator")
        .setColor("0x00FF61")
        .setDescription("To use this correctly the first number needs to be the number of proxies that you have and the seccond number needs to be the amount of tasks that you intend to run ex. !delay 20 10")
        .setFooter("Shopify Delay Safety Calculator By: Mr.Bean#0885", "https://cdn.discordapp.com/attachments/559709033444147244/571865995061493780/download.png")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/559709033444147244/571865995061493780/download.png")
        .addField("Proxies", proxy,true)
        .addField("Tasks", task,true)
        .addField("Recommended Delay", recDelay,true);
        message.channel.send({embed});

    }
});



client.login(token);