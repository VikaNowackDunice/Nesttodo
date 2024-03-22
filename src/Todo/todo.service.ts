import { InjectModel } from '@nestjs/sequelize'
import { Todo } from './todo.model'
import { Injectable, NotFoundException } from '@nestjs/common'
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

  async updateCheckTodo (dto: CreateTodoDto, id: number): Promise<[affectedCount: number]> {
    const todo = await this.todoRepository.update(
      { text: dto.text, isChecked: dto.isChecked },
      { where: { id } }
    )
    return todo
  }

  async deleteOneTodo (id: number): Promise<number> {
    try {
      const todo = await this.todoRepository.destroy({
        where: {
          id
        }
      })
      return todo
    } catch (error) {
      throw new NotFoundException(`Todo list item was not deleted ${id}`)
    }
  }

  async deleteAllTodo (isChecked: boolean): Promise<number> {
    const todo = await this.todoRepository.destroy({
      where: {
        isChecked : true
      }
    })
    return todo
  }
}
