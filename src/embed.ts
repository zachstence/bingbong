import { MessageEmbed } from "discord.js";
import { Result } from "./types";

export const embed = (r: Result): MessageEmbed => {
    return new MessageEmbed({
        title: r.title,
        description: r.description,
        footer: {
            text: r.url,
        },
    })
}
