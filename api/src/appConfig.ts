export const appConfig = {
  mongoUser: process.env.MONGO_INITDB_ROOT_USERNAME,
  mongoPwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
  mongoHost: process.env.MONGO_HOST,
  mongoPort: process.env.MONGO_PORT,
  mongoDbName: process.env.MONGO_DB_NAME,
  appPort: parseInt(process.env.APP_PORT),
  isDev: process.env.NODE_ENV === 'development'
}
