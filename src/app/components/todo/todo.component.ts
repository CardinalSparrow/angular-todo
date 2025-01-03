import { Component, signal } from '@angular/core';
import { Todo } from '../../models/Todo.type';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [NgFor, FormsModule],
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

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }

  delete(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  inputTodo = '';

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
  }
}
