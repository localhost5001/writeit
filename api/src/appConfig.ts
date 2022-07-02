export const appConfig = {
  mongoUser: process.env.MONGO_INITDB_ROOT_USERNAME,
  mongoPwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
  mongoHost: process.env.MONGO_HOST,
  mongoPort: process.env.MONGO_PORT,
  appPort: process.env.APP_PORT
}
