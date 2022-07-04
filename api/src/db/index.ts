import { MongoClient } from 'mongodb'
import type { Db } from 'mongodb'

import { appConfig } from 'appConfig.js'

let db: Db | null = null

async function connectDb(): Promise<MongoClient> {
  try {
    console.log('Connecting to database...')

    const connStr = `mongodb://${appConfig.mongoUser}:${appConfig.mongoPwd}@${appConfig.mongoHost}:${appConfig.mongoPort}/?authSource=admin&readPreference=primary&ssl=false`
    const client = await MongoClient.connect(connStr)
    db = client.db(appConfig.mongoDbName)
    
    console.log('Connected to database')    
    return client
  } catch (err) {
    console.error(err)
    throw err
  }
}

function getDb(): Db {
  if (db === null) {
    throw new Error('DB connection is closed')
  }

  return db
}

export { connectDb, getDb }
