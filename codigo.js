const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildVoiceStates
    ]
});

client.on("ready", info => {
    const canal = info.channels.cache.get("958916702408687616");
    canal.send("¡Holaaa querida, estoy vivo <@1229911370418360488>!");
})

client.on("messageCreate", msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith("<@1231449731423535114>")) return;
    
    console.log("Recibi un mensaje de:" + msg.author.tag)

    if(msg.content.toLowerCase().includes("pija")) msg.reply(`No seas asqueroso/a <@${msg.author.id}>`);
    else if(msg.content.toLowerCase().includes("amo") && msg.author.id == 1229911370418360488) msg.reply(`Yo también te amo <@${msg.author.id}>`);
    else msg.reply("Holaaa, no sé que decir... Estoy en desarrollo... <:Epico:1025495442491965501>")
});

client.login(process.env.token);