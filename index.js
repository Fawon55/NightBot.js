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



client.login("MTAzNDM3NDEzNzk0MDAyOTUxMA.GtCBaR.p8eKh3BWVVLjCj8A54H0pBxPuQGESkOa93QTXo");