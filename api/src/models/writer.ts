import mongoose, { Schema } from 'mongoose'

export interface Writer {
  name: string
  summary: string
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export const WriterSchema = new Schema<Writer>({
  name: { type: String, required: true },
  summary: { type: String, required: true },
  active: { type: Boolean, required: true, default: true }
}, {
  timestamps: true
})

export const WriterModel = mongoose.model('writer', WriterSchema)
