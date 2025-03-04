import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as schema from './schema';
import config from './drizzle.config';

export const pgPool = new Pool(config.dbCredentials);

export const db = () => drizzle(pgPool, { schema });
