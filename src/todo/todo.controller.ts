import { Controller, Get, Post, Body, Put, Delete, Param, UsePipes } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common";

import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller('todos')
export class TodoController{

  constructor(private readonly todoService:TodoService) {}

  @Get()
  getAllTodo(){
    return this.todoService.getAllTodo();
  }

  @Post()
  createTodo(@Body() todoDto: CreateTodoDto){
    return this.todoService.createTodo(todoDto);
  }

  @Put('/update')
  updateAllTodo(@Body() todoData: CreateTodoDto){
    return this.todoService.updateAllTodo(todoData);
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  updateCheckTodo(@Param('id') id: number, @Body() todoData: CreateTodoDto){
    return this.todoService.updateCheckTodo(todoData, id);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  deleteOneTodo(@Param('id') id: number){
    return this.todoService.deleteOneTodo(id);
  }

  @Delete()
  deleteAllTodo(){
    return this.todoService.deleteAllTodo();
  }
}