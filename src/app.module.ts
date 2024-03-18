import {Module} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Todo } from "./Todo/todo.model";
import { TodoModule } from "./Todo/todo.module";
import { TodoController } from "./Todo/todo.controller";
import { TodoService } from "./Todo/todo.service";

@Module({
  imports: [ 
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`
  }),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRESS_PORT),
    username: 'dunice',
    password: 'dunice',
    database: 'nest',
    models: [Todo],
  }),
  TodoModule,
],
  // controllers: [TodoController],
  // providers: [TodoService],
})
export class AppModule {}
