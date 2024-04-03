import { InjectModel } from '@nestjs/sequelize'
import { Injectable, NotFoundException } from '@nestjs/common'

import { Todo } from './todo.model'
import { type CreateTodoDto } from './dto/create-todo.dto'

@Injectable()
export class TodoService {
  constructor (@InjectModel(Todo) private readonly todoRepository: typeof Todo) {}

  async getAllTodo (): Promise<Todo[]> {
    try{
      const todos = await this.todoRepository.findAll()
      return todos
    } catch (error) {
        throw new NotFoundException('Todo items not found')
    }
  }

  async createTodo (dto: CreateTodoDto): Promise<Todo> {
     try{
      const todo = await this.todoRepository.create(dto)
      return todo
     } catch (error){
        throw new NotFoundException('Failed to create todo item')
     }
  }

  async updateAllTodo (dto: CreateTodoDto){
    try{
      const todo = await this.todoRepository.update(
        { isChecked: dto.isChecked },
        { where: {} }
      )
      return todo
    } catch (error){
        throw new NotFoundException('Failed to create todo item')
     }
    
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

  async deleteOneTodo (id: number): Promise<string> {
    try {
      const deleteTodo = await this.todoRepository.destroy({
        where: {
          id
        }
      })

      if(deleteTodo === 0) {
        throw new NotFoundException(`Todo list item with id ${id} was not found`);
      }
      return `Todo list item with id ${id} was successfully deleted`;
    } catch (error) {
      throw new NotFoundException(`Todo list item was not deleted`)
    }
  }

  async deleteCheckedTodo (): Promise<number> {
    try{
      const todo = await this.todoRepository.destroy({
        where: {
          isChecked : true
        }
      })
      return todo
    } catch(error){
      throw new NotFoundException(`Todo list item was not deleted`)
    }
  }  
}
