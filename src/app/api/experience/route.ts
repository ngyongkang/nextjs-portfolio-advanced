import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { Experience } from "../../../../typings";



async function GET(request: Request) {
    const query = groq`
        *[_type == "experience"] {
            ...,
            technologies[] ->
        }
    `

    type Data = {
        experiences: Experience[]
    }

    const experiences: Experience[] = await client.fetch(query);

    return Response.json(experiences);
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

