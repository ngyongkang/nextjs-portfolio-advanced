import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { Social } from "../../../../typings";



async function GET(request: Request) {
    const query = groq`
        *[_type == "social"]
    `

    type Data = {
        socials: Social[]
    }

    const socials: Social[] = await client.fetch(query);

    return Response.json(socials);
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

