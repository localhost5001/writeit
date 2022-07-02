import mongoose from 'mongoose'

export interface Keyword {
  name: string
}

export const KeywordSchema = new mongoose.Schema<Keyword>({
  name: String
})

export const KeywordModel = mongoose.model('keyword', KeywordSchema )
