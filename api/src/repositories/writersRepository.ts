import { WriterModel, Writer, WriterPayload } from 'models/writer.js'

const getWriterByName = async (name: string): Promise<Writer | null> => {
  return await WriterModel
    .findOne({ name: name })
}

const getWriterById = async (id: string): Promise<Writer | null> => {
  return await WriterModel
    .findById(id)
}

const createWriter = async (payload: WriterPayload): Promise<Writer> => {
  return await WriterModel
    .create(payload)
}

const updateWriter = async (id: string, payload: Partial<WriterPayload>): Promise<void> => {
  await WriterModel
    .findByIdAndUpdate(id, payload)
}

export { getWriterByName, getWriterById, createWriter, updateWriter }
