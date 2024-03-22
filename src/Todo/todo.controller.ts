import { TodoService } from "./todo.service";
import { Controller, Get, Post, Body, Put, Delete, Param } from "@nestjs/common";
import {Todo} from "./todo.model";
import {CreateTodoDto} from "./dto/create-todo.dto";

@Controller('todos')
export class TodoController{

  constructor(private readonly todoService:TodoService) {}

  @Get('/allTodo')
  getAllTodo(){
    return this.todoService.getAllTodo();
  }

  @Post('/createTodo')
  createTodo(@Body() todoDto: CreateTodoDto){
    return this.todoService.createTodo(todoDto);
  }

  @Put('/updateAllTodo')
  updateAllTodo(@Body() todoData: CreateTodoDto, id:number){
    return this.todoService.updateAllTodo(todoData, id);
  }

  @Put('/updateCheckTodo/:id')
  updateCheckTodo(@Param('id') id: number, @Body() todoData: CreateTodoDto){
    return this.todoService.updateCheckTodo(todoData, id);
  }

  @Delete('/deleteOne/:id')
  deleteOneTodo(@Param('id') id: number){
    return this.todoService.deleteOneTodo(id);
    }

  @Delete('/deleteaAll')
  deleteAllTodo(@Body() isChecked: boolean){
    return this.todoService.deleteAllTodo(isChecked);
  }
}
