import { Client, Intents } from "discord.js";
import config from "config";
import { search } from "./search";
import { parse } from "./parse";
import { embed } from "./embed";

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
        const m = message.content.match(/^<@\d+> (.*)$/);
        
        if (m && m[1]) {
            const html = await search(m![1]!);
            const result = parse(html);
            
            await message.reply({
                embeds: [ embed(result) ]
            });
        } else {
            await message.reply("Unable to parse your search");
        }
    }
});
