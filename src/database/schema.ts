import {  pgTable, serial, text } from 'drizzle-orm/pg-core';

export const blog = pgTable('blog', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    text: text('text').notNull()
});

  

