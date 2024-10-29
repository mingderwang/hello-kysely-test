import { Kysely } from 'kysely'
import { PlanetScaleDialect } from 'kysely-planetscale'

const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  })
})

console.log(db)

