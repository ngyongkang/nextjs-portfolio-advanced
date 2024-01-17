import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { PageInfo, Project } from "../../../../typings";



async function GET(request: Request) {
    const query = groq`
        *[_type == "pageInfo"][0]
    `

    type Data = {
        pageInfo: PageInfo[]
    }

    const pageInfo: PageInfo[] = await client.fetch(query);

    return Response.json(pageInfo);
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

