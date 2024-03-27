import {Module} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";

import { Todo } from "./Todo/todo.model";
import { TodoModule } from "./Todo/todo.module";

require('dotenv').config();
@Module({
  imports: [ 
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`
  }),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRESS_PORT),
    username: process.env.POSTGRE_USERNAME,
    password: process.env.POSTGRE_PASSWORD,
    database: process.env.POSTGRE_DATABASE,
    models: [Todo],
  }),
  TodoModule,
  ],
})
export class AppModule {}
