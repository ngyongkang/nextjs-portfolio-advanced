import { groq } from "next-sanity";
import { getClient } from "../../../../sanity/lib/client";
import { Project } from "../../../../typings";

const client = getClient();

async function GET(request: Request) {
    const query = groq`
        *[_type == "project"] {
            ...,
            technologies[] ->
        }
    `;

    type Data = {
        projects: Project[]
    }

    const projects: Project[] = await client.fetch(query);

    return Response.json(projects);
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

