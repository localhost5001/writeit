import mongoose, { Schema } from 'mongoose'

export interface Post {
  content: string
  createdAt: Date
  updatedAt: Date
  keywords: string[]
  author_id: Schema.Types.ObjectId
}

export const PostSchema = new Schema<Post>({
    content: { String, required: true },
    author_id: { type: Schema.Types.ObjectId, ref: 'writer', required: true },
    keywords: { type: [{type: String, index: true}], required: true, default: [] }
  }, {
    timestamps: true
  }
)

export const PostModel = mongoose.model('post', PostSchema)
