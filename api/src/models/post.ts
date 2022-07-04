import type { ObjectId } from 'mongodb'

export interface Post {
  content: string
  postedAt?: Date
  writer_id: ObjectId
  keywords: string[]
  createdAt: Date
  updatedAt: Date
}

export type PostMeta = Pick<Post, 'keywords' | 'postedAt'>

export type PostContent = Pick<Post, 'content'>
