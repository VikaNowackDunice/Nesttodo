import { Controller, Get, Post, Body, Put, Delete, Param } from "@nestjs/common";

import { TodoService } from "./todo.service";

import {CreateTodoDto} from "./dto/create-todo.dto";

@Controller('todos')
export class TodoController{

  constructor(private readonly todoService:TodoService) {}

  @Get('/all-todo')
  getAllTodo(){
    return this.todoService.getAllTodo();
  }

  @Post('/create-todo')
  createTodo(@Body() todoDto: CreateTodoDto){
    return this.todoService.createTodo(todoDto);
  }

  @Put('/update-all-todo')
  updateAllTodo(@Body() todoData: CreateTodoDto, id:number){
    return this.todoService.updateAllTodo(todoData, id);
  }

  @Put('/update-check-todo/:id')
  updateCheckTodo(@Param('id') id: number, @Body() todoData: CreateTodoDto){
    return this.todoService.updateCheckTodo(todoData, id);
  }

  @Delete('/delete-one/:id')
  deleteOneTodo(@Param('id') id: number){
    return this.todoService.deleteOneTodo(id);
  }

  @Delete('/deletea-all')
  deleteAllTodo(@Body() isChecked: boolean){
    return this.todoService.deleteAllTodo(isChecked);
  }
}
