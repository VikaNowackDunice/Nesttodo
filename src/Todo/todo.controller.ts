import { Controller, Get, Post, Body, Put, Delete, Param } from "@nestjs/common";

import { TodoService } from "./todo.service";

import {CreateTodoDto} from "./dto/create-todo.dto";

@Controller('todos')
export class TodoController{

constructor(private readonly todoService:TodoService) {}

@Get()
getAllTodo(){
return this.todoService.getAllTodo();
}

@Post('/create')
createTodo(@Body() todoDto: CreateTodoDto){
return this.todoService.createTodo(todoDto);
}

@Put('/update')
updateAllTodo(@Body() todoData: CreateTodoDto, id:number){
return this.todoService.updateAllTodo(todoData, id);
}

@Put('/update/:id')
updateCheckTodo(@Param('id') id: number, @Body() todoData: CreateTodoDto){
return this.todoService.updateCheckTodo(todoData, id);
}

@Delete('/:id')
deleteOneTodo(@Param('id') id: number){
return this.todoService.deleteOneTodo(id);
}

@Delete()
deleteAllTodo(@Body() isChecked: boolean){
return this.todoService.deleteAllTodo(isChecked);
}
}