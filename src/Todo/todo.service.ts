import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todo.model';
import { CreateTodoDto } from './dto/create-todo.dto';
import { todo } from 'node:test';

@Injectable()
export class TodoService {
  todo: any;
  updateTodo(todoDto: CreateTodoDto) {
    throw new Error("Method not implemented.");
  }
  
  constructor(@InjectModel(Todo) private todoRepository: typeof Todo){}

  async getAllTodo() {
    const todos =  await this.todoRepository.findAll();
    return todos
  }

  async createTodo(dto: CreateTodoDto){
    const todo = await this.todoRepository.create(CreateTodoDto);
    return todo;
  }

  async updateAllTodo(dto: CreateTodoDto){
    const todo = await this.todoRepository.update(
      {isChecked: dto.isChecked}, 
      {where:{}}
      );
    return todo;
  }

  async updateCheckTodo(dto: CreateTodoDto, id: number){
    const todo = await this.todoRepository.update(
      {text: dto.text, isChecked: dto.isChecked},
      {where:{id}}
    );
  return todo;
  }

  async deleteOneTodo( id: number){
    const todo = await this.todoRepository.destroy({
      where:{ 
        id 
      },
    });
  return todo;
  }

  async deleteAllTodo(dto: CreateTodoDto){
    const todo = await this.todoRepository.destroy({
      where:{
        isChecked:true
      },
    });
  return todo;
  }

}