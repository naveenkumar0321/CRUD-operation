import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {Todo} from "../../model/todo";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[]
  constructor(private ts:TodoService) { }

  ngOnInit(): void {
    
    this.ts.getTodo().subscribe(data=>{
       this.todos=data
    });

  }

   change(todo:Todo){
     this.ts.updateTodo(todo)
   }

   add(todo:Todo){
     this.ts.addTodo(todo)
   }

   delete(todo:Todo){
     this.ts.deleteTodo(todo)
   }





}
