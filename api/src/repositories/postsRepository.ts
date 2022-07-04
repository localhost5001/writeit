import { ObjectId, WithId } from 'mongodb'
import { getDb } from 'db/index.js'
import type { Post, PostContent, PostMeta } from 'models/post.js'

const getPosts = async (startDate: Date, endDate: Date): Promise<WithId<Post>[]> => {
  const db = getDb()
  const postCollection = db.collection<Post>('post')

  return await postCollection
    .find({
      postedAt: { $gte: startDate, $lte: endDate }
    })
    .sort({ postedAt: 1 })
    .toArray()
}

const getAuthorPosts = async (startDate: Date, endDate: Date, authorId: string): Promise<WithId<Post>[]> => {
  const db = getDb()
  const postCollection = db.collection<Post>('post')

  return await postCollection
    .find({
      postedAt: { $gte: startDate, $lte: endDate },
      author_id: authorId 
    })
    .sort({ postedAt: 1 })
    .toArray()
}

const getPostsByKeywords = async (keywords: string[]): Promise<WithId<Post>[]> => {
  const db = getDb()
  const postCollection = db.collection<Post>('post')
  
  return await postCollection
    .find({
      postedAt: { $exists: true },
      keywords: { $in: keywords }
    })
    .sort({ postedAt: 1 })
    .toArray()
}

const getPostById = async (id: string): Promise<Post | null> => {
  const db = getDb()
  const postCollection = db.collection<Post>('post')
  const oid = new ObjectId(id)

  return await postCollection
    .findOne({ _id: oid })
}

const createPost = async (payload: Post): Promise<ObjectId> => {
  const db = getDb()
  const postCollection = db.collection<Post>('post')

  const res = await postCollection
    .insertOne(payload)
    
  return res.insertedId
}

const updatePostContent = async (id: string, payload: PostContent): Promise<void> =>  {
  const db = getDb()
  const postCollection = db.collection<Post>('post')
  const oid = new ObjectId(id)

  await postCollection.findOneAndUpdate(
    { _id: oid },
    payload
  )
}

const updatePostMeta = async (id: string, payload: PostMeta): Promise<void> =>  {
  const db = getDb()
  const postCollection = db.collection<Post>('post')
  const oid = new ObjectId(id)

  await postCollection
    .findOneAndUpdate(
      { _id: oid },
      payload
    )
}

export { getPosts, getAuthorPosts, getPostById, getPostsByKeywords, updatePostContent, updatePostMeta, createPost }
