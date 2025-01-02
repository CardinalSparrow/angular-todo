import { Component } from '@angular/core';
import { Todo } from '../../models/Todo.type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos: Todo[] = [];

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first content',
        completed: true,
      },
      {
        content: 'second content',
        completed: false,
      },
    ];
  }
}
