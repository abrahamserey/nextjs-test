// This file implements CRUD

import { sql, eq, and, or, ne, asc, desc, isNull, gt } from 'drizzle-orm';

import { db } from './db';

import { blog } from './schema'

export class DatabaseOperations {

    async getBlogPosts(){
        const rows = await db().select().from(blog)
        return rows
    }
}