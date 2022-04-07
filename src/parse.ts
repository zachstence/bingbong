import cheerio from "cheerio";
import { Result } from "./types";

export const parse = (html: string): Result => {
    const $ = cheerio.load(html);

    const result = $("ol#b_results > li.b_algo").toArray()[0]

    const title = $(result).find("h2 > a").text();
    const url = $(result).find("h2 > a").attr("href")?.toString();
    const description = $(result).find("div.b_caption > p").text();

    return {
        title,
        description,
        url,
    }
};
