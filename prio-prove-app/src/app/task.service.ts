import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GetTodo } from './store/actions/task.action';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSub: Subject<string[]> = new Subject();
  private taskList: string[] = [];

  constructor(private store: store) {
    this.store.dispatch(new GetTodo());
  }

  addTodo(userInput: string) {
    this.taskList = [...this.taskList, userInput];
    this.tasksSub.next(this.taskList);
  }

  removeTodo(task: string) {
    this.taskList = this.taskList.filter((t) => t != task);
    this.tasksSub.next(this.taskList);
  }

  editTodo(task: string) {
    const todoTask = this.taskList.filter((t) => t == task);
    const result = prompt('edit your task', task);
    if (result !== null && result !== '') {
      task = result;
      this.taskList = [...todoTask, result];
    }
    console.log(todoTask, 'old value');
    console.log(result, 'edited res.');
    console.log(this.taskList, 'tasklist');

    this.tasksSub.next(this.taskList);
  }

  getTodo() {
    // this.store.dispatch(new GetTodo());
    return this.tasksSub.asObservable();
  }
}
