const user = _getEnv('MONGO_INITDB_ROOT_USERNAME')
const pwd = _getEnv('MONGO_INITDB_ROOT_PASSWORD')
const host = _getEnv('MONGO_HOST')
const port = _getEnv('MONGO_PORT')
const dbName = _getEnv('MONGO_DB_NAME')
const connStr = `mongodb://${user}:${pwd}@${host}:${port}/${dbName}?authSource=admin&readPreference=primary&ssl=false`

const db = connect(connStr)

db.writer.dropIndexes()
db.writer.createIndex({ name: 1 }, { unique: true })

db.post.dropIndexes()
db.post.createIndex(
  { postedAt: 1 },
  { sparse: true }
)
db.post.createIndex(
  { writer_id: 1 }
)
