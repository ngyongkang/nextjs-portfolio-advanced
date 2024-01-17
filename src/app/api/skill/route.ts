import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { Skill } from "../../../../typings";



async function GET(request: Request) {
    const query = groq`
        *[_type == "skill"]
    `

    type Data = {
        skills: Skill[]
    }

    const skills: Skill[] = await client.fetch(query);

    return Response.json(skills);
}

function POST(request: Request) {
    
    return Response.json({name: "John Doe"});
}

function PUT(request: Request) {
    return Response.json({name: "John Doe"});
}

function DELETE(request: Request) {
    return Response.json({name: "John Doe"});
}

export {
    DELETE, GET,
    POST,
    PUT
};

