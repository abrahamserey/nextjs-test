// This file implements CRUD

import { eq } from 'drizzle-orm';

import { db } from './db';

import { blog } from './schema'

export class DatabaseOperations {

    async getBlogPosts(){
        const rows = await db().select().from(blog)
        return rows
    }

    async getSingleBlogPost(id: number){
        const rows = await db().select().from(blog).where(eq(blog.id, id))
        const row = rows[0];
        return row;
    }

    async insertBlogPost(title:string, text:string){
        await db().insert(blog).values({
            'text': text,
            'title': title
        })

    }
}