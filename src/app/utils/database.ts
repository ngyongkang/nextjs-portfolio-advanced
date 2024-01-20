import { groq } from "next-sanity";
import { Experience, PageInfo, Project, Skill, Social } from "../../../typings";
import { getClient } from "../../../sanity/lib/client";

const client = getClient();

async function queryData( queryString: string) {
    try {
        const query = groq`${queryString}`;
        return await client.fetch(query);
    } catch (e) {
        throw e;
    }
}

export {
    queryData
};

