declare namespace NodeJS {
  export interface ProcessEnv {
    MONGO_INITDB_ROOT_USERNAME: string
    MONGO_INITDB_ROOT_PASSWORD: string
    MONGO_HOST: string
    MONGO_PORT: string
    APP_PORT: string
    NODE_ENV: string
  }
}
