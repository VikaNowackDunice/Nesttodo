import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { TodoService } from './todo.service'
import { Todo } from './todo.model'
import { TodoController } from './todo.controller'

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [SequelizeModule.forFeature([Todo])]
})
export class TodoModule {}
