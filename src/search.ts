import axios from "axios";

export const search = async (q: string): Promise<string> => {
    const res = await axios.get(
        "https://bing.com/search",
        { params: { q } },
    );

    return res.data.toString();
};
