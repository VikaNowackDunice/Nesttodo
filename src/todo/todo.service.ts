import { InjectModel } from '@nestjs/sequelize'
import { Injectable, NotFoundException } from '@nestjs/common'

import { Todo } from './todo.model'
import { type CreateTodoDto } from './dto/create-todo.dto'

@Injectable()
export class TodoService {
  constructor (@InjectModel(Todo) private readonly todoRepository: typeof Todo) {}

  async getAllTodo (): Promise<Todo[]> {
    const todos = await this.todoRepository.findAll()
    return todos
  }

  async createTodo (dto: CreateTodoDto): Promise<Todo> {
    const todo = await this.todoRepository.create(dto)
    return todo
  }

  async updateAllTodo (dto: CreateTodoDto, id: number): Promise<[affectedCount: number]> {
    const todo = await this.todoRepository.update(
      { isChecked: dto.isChecked },
      { where: {} }
    )
    return todo
  }

  async updateCheckTodo (dto: CreateTodoDto, id: number): Promise<Todo> {
    try {
      const [affectedCount, affectedRows] = await this.todoRepository.update(
        { text: dto.text, isChecked: dto.isChecked },
        { where: { id }, returning: true}
      )
      if (affectedCount === 0) {
        throw new NotFoundException(`Todo list item with id ${id} was not found`);
      }
      return affectedRows[0];
    } catch (error) {
      throw new NotFoundException(`Todo list item was not ${id}`)
    } 
  }

  async deleteOneTodo (id: number): Promise<void> {
    try {
      const deleteTodo = await this.todoRepository.destroy({
        where: {
          id
        }
      })
      if(deleteTodo === 0) {
        throw new NotFoundException(`Todo list item with id ${id} was not found`);
      }
    } catch (error) {
      throw new NotFoundException(`Todo list item was not deleted`)
    }
  }

  async deleteAllTodo (): Promise<number> {
    const todo = await this.todoRepository.destroy({
      where: {
        isChecked : true
      }
    })
    return todo
  }
}
