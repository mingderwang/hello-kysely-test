import { Kysely } from 'kysely'
import { NeonHTTPDialect } from "kysely-neon"
import { type Database } from  './types'
console.log(process.env.DATABASE_URL)
export const db = new Kysely<Database>({
  dialect: new NeonHTTPDialect({
    connectionString: process.env.DATABASE_URL as string,
  }),
})
