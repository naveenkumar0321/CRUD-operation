import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/todo'
import { TodoService } from 'src/app/service/todo.service';
import {v4 as uuidv4} from "uuid";


@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  todoTitle:string;

  constructor(private ts:TodoService) { }

  handleAdd(){
      const todo:Todo={
        id:uuidv4(),
        title:this.todoTitle,
        isCompleted:false,
        date:new Date()
      }
        
      this.ts.addTodo(todo);
      this.todoTitle=""
  }

  ngOnInit(): void {}

}
