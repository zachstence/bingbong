import { Client, Intents } from "discord.js";
import config from "config";

const TOKEN = config.get<string>("bot.token");

console.log("App starting")

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES
    ]
});
client.login(TOKEN);

client.on("ready", () => {
    console.log(`${client.user?.username} is online`);
});

client.on("messageCreate", async message => {
    if (client.user && message.mentions.users.has(client.user.id)) {
        await message.reply("mentioned");
    }
});
