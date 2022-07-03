import mongoose from 'mongoose'

export interface WriterPayload {
  name: string
  summary: string
  active: boolean
}

export interface Writer extends WriterPayload {
  createdAt: Date
  updatedAt: Date
}

export const WriterSchema = new mongoose.Schema<Writer>({
  name: { type: String, required: true, unique: true },
  summary: { type: String, required: true },
  active: { type: Boolean, required: true, default: true }
}, {
  timestamps: true
})

export const WriterModel = mongoose.model('writer', WriterSchema)
