// import type { Config } from 'drizzle-kit';

// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config({ path: require('path').resolve(process.cwd(), '../.env') });

export default {
  schema: './src/database/schema.ts',
  out: './drizzle/migrations',
  dialect: 'postgresql', // oracle. mysql, microsoftsql, etc, etc
  dbCredentials: {
    database: process.env.DB_NAME, 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: String(process.env.DB_PASS),
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
    ssl: false
  },
} // satisfies Config;
