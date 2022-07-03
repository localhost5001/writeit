import { KeywordModel, Keyword } from 'models/keyword.js'

const getAllKeywords = async (): Promise<Keyword[]> => {
  return await KeywordModel
    .find({})
}

export { getAllKeywords }
