const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent
    ]
})

client.on("ready", () => {
    console.log("Bot Ready");
});



client.login("MTAzNDM3NDEzNzk0MDAyOTUxMA.GOvQF-.nakPC9raMejxO2WEVO8pEDcrwJsGkGdywhg_iw");