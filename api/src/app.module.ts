import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';

const port = process.env.MONGO_PORT
const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const hostname = process.env.MONGO_HOSTNAME

const mongoUri = `mongodb://${username}:${password}@${hostname}:${port}/`
@Module({
  imports: [UsersModule, MongooseModule.forRoot(mongoUri)],
})
export class AppModule {}
