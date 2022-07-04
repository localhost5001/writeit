import { ObjectId } from 'mongodb'
import type { WithId } from 'mongodb'

import { getDb } from 'db/index.js'
import { Writer, WriterCollectionName } from 'models/writer.js'

const getWriterByName = async (name: string): Promise<WithId<Writer> | null> => {  
  const db = getDb()
  const writerCollection = db.collection<Writer>(WriterCollectionName)
  return await writerCollection
    .findOne({ name: name })
}

const getWriterById = async (id: string): Promise<WithId<Writer> | null> => {
  const db = getDb()
  const writerCollection = db.collection<Writer>(WriterCollectionName)

  const oid = new ObjectId(id)
  return await writerCollection
    .findOne({ _id: oid })
}

const createWriter = async (payload: Writer): Promise<ObjectId> => {
  const db = getDb()
  const writerCollection = db.collection<Writer>(WriterCollectionName)
  
  const res = await writerCollection.insertOne(payload)
  return res.insertedId
}

const updateWriter = async (id: string, payload: Partial<Writer>): Promise<void> => {
  const db = getDb()
  const writerCollection = db.collection<Writer>(WriterCollectionName)
  
  const oid = new ObjectId(id)
  await writerCollection
    .findOneAndUpdate(
      { _id: oid }, 
      { $set: payload }
    )
}

export { getWriterByName, getWriterById, createWriter, updateWriter }
