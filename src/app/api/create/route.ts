import { NextRequest, NextResponse } from "next/server";
import { DatabaseOperations } from '../../../database/operations';

export async function POST(request: NextRequest): Promise<NextResponse> {

    const post = await request.text()

    const operations = new DatabaseOperations()
    try {
        operations.insertBlogPost('Dont know yet', post)
    } catch (e){
        console.log(e)
        return NextResponse.json({message: 'could not insert post'})
    }

    return NextResponse.json({ message: "Post received" });
}