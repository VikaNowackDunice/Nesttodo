import { TodoService } from "./todo.service";
import { Controller, Post, Req, Get,  Body, Put, Delete, Param } from "@nestjs/common";
import {Todo} from "./todo.model";
import {CreateTodoDto} from "./dto/create-todo.dto";

@Controller('todos')
export class TodoController{

  constructor(private readonly todoService:TodoService) {}

  @Get('/allTodo')
  getAllTodo(@Req() request: Request){
    return this.todoService.getAllTodo();
  }

  @Post('/createTodo')
  create(@Body() todoDto: CreateTodoDto){
    return this.todoService.createTodo(todoDto);
  }

  @Put('/updateAllTodo')
  updateAllTodo(@Body() todoData: CreateTodoDto){
    return this.todoService.updateAllTodo(todoData);
  }

  @Put('/updateCheckTodo')
  updateCheckTodo(@Body() CreateTodoDto, id: number){
    return this.todoService.updateCheckTodo(CreateTodoDto, id);
  }

  @Delete('/deleteOne/:id')
    remove(@Param('id') id: number){
      return this.todoService.deleteOneTodo(id);
    }

  @Delete('/deleteaAll')
  deleteAll(@Body() isChecked: CreateTodoDto){
    return this.todoService.deleteAllTodo(isChecked);
  }
}

function remove(arg0: any, id: any, number: any) {
  throw new Error("Function not implemented.");
}
