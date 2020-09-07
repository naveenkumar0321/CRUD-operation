import { Injectable } from '@angular/core';
import {Todo} from "../model/todo" 
import { of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos:Todo[]
  constructor() { 
    this.todos=[
      {
        id:"111",
        title:"learn c++",
        isCompleted:false,
        date:new Date()
      }, {
        id:"222",
        title:"learn ReactJS",
        isCompleted:true,
        date:new Date()
      }, {
        id:"333",
        title:"learn Angular",
        isCompleted:true,
        date:new Date()
      },
    ];
  }

  getTodo(){
    return of(this.todos)
  }

  addTodo(todo:Todo){
   this.todos.push(todo)
  }

  updateTodo(todo:Todo){
    this.todos.map((obj)=>{
      if (obj.id===todo.id) {
        todo.isCompleted=!todo.isCompleted;
      }
    });
  }


  deleteTodo(todo:Todo){
  const value=this.todos.findIndex((obj)=>obj.id===todo.id);
  this.todos.splice(value,1)
  }
}
