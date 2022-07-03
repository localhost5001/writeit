import mongoose from 'mongoose'

export interface PostPayload {
  content: string
  postedAt?: Date
  author_id: mongoose.Schema.Types.ObjectId
  keywords: string[]
}

export type PostMeta = Pick<PostPayload, 'keywords' | 'postedAt'>

export type PostContent = Pick<PostPayload, 'content'>

export interface Post extends PostPayload {
  createdAt: Date
  updatedAt: Date
}

export const PostSchema = new mongoose.Schema<Post>({
    content: { String, required: true },
    postedAt: { Date, required: false },
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'writer', required: true },
    keywords: { type: [{type: String, index: true}], required: true, default: [] }
  }, {
    timestamps: true
  }
)

PostSchema.index({ postedAt: 1, author_id: 1 }, { partialFilterExpression: { postedAt: { $exists: true } } })

export const PostModel = mongoose.model('post', PostSchema)
