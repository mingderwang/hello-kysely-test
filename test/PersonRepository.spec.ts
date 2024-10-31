import { sql } from 'kysely'
import { db } from '../src/database'
import * as PersonRepository from '../src/PersonRepository'
import { afterAll, afterEach, beforeAll, test, expect, describe } from "bun:test";

describe('PersonRepository', () => {
  beforeAll(async () => {
    await sql`truncate table ${sql.table('person')}`.execute(db)
    await db.schema.dropTable('person').execute()
  await db.schema.createTable('person')
  .addColumn('id', 'serial', (cb) => cb.primaryKey())
  .addColumn('first_name', 'varchar(255)')
  .addColumn('last_name', 'varchar(255)')
  .addColumn('metadata', 'varchar(255)')
  .addColumn('gender', 'varchar(50)')
  .addColumn('created_at', 'timestamp', (cb) =>
    cb.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
  )
  .execute()
  })
    
  afterAll(async () => {
    await sql`truncate table ${sql.table('person')}`.execute(db)
    await db.schema.dropTable('person').execute()
  })

  test('should create a person', async () => {
    await PersonRepository.createPerson({
      first_name: 'Jennifer',
      last_name: 'Aniston',
      gender: 'woman',
      metadata: 
   JSON.stringify( {
  login_at: '2024-10-30T04:54:09.066Z',
  ip: '192.168.1.1',
  agent: 'Mozilla/5.0',
  plan: 'free'
    })
   })
  })
    
})
