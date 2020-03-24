import * as mongoose from 'mongoose'

const port = process.env.MONGO_PORT
const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const hostname = process.env.MONGO_HOSTNAME

const mongoUri = `mongodb://${username}:${password}@${hostname}:${port}/`

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  }
]