import { WriterModel, Writer } from 'models/writer.js'

const getWriterByName = async (name: string): Promise<Writer | null> => {
  return await WriterModel
    .findOne({ name: name })
}

const getWriterById = async (id: string): Promise<Writer | null> => {
  return await WriterModel
    .findById(id)
}

export { getWriterByName, getWriterById }
