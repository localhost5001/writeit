import { PostModel, Post } from 'models/post.js'

const getPosts = async (startDate: Date, endDate: Date): Promise<Post[]> => {
  return await PostModel
    .find({
      postedAt: { $gte: startDate, $lte: endDate }
    })
    .sort({ postedAt: 1 })
}

const getAuthorPosts = async (startDate: Date, endDate: Date, authorId: string): Promise<Post[]> => {
  return await PostModel
    .find({
      postedAt: { $gte: startDate, $lte: endDate },
      author_id: authorId 
    })
    .sort({ postedAt: 1 })
}

const getPostsByKeywords = async (keywords: string[]): Promise<Post[]> => {
  return await PostModel
    .find({
      keywords: { $in: keywords }
    })
    .sort({ postedAt: 1 })
}

const getPostById = async (id: string): Promise<Post | null> => {
  return await PostModel
    .findById(id)
}

export { getPosts, getAuthorPosts, getPostById, getPostsByKeywords }
