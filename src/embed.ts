import { MessageEmbed } from "discord.js";
import { BING_ICON_URL } from "./constants";
import { Result } from "./types";

export const embed = (r: Result): MessageEmbed => {
    return new MessageEmbed({
        title: r.title,
        description: r.description,
        footer: {
            text: r.url,
            iconURL: BING_ICON_URL,
        },
        color: "#2CC2F8",
    })
}
