interface Writer {
  name: string
  summary: string
  active: boolean
  createdAt: Date
  updatedAt: Date
}

const WriterCollectionName = 'writer'

export type { Writer }

export { WriterCollectionName }
