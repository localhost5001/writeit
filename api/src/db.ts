import mongoose from 'mongoose'
import type EventEmitter from 'events'

import { appConfig } from 'appConfig.js'

async function connectDb(): Promise<EventEmitter> {
  try {
    const connStr = `mongodb://${appConfig.mongoUser}:${appConfig.mongoPwd}@${appConfig.mongoHost}:${appConfig.mongoPort}/?authSource=admin&readPreference=primary&ssl=false`
    const mongooseInstance = await mongoose.connect(connStr, {
      dbName: appConfig.mongoDbName
    })
    console.log('Connected to database')
    return mongooseInstance.connection
  } catch (err) {
    console.error(err)
    throw err
  }
}

export { connectDb }
