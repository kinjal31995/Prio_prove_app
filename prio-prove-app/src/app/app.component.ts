import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { GetTodo } from './store/actions/task.action';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'Prio-Prove';
  public taskList$: Observable<string[]>;

  constructor(private taskService: TaskService) {
    // this.store.dispatch(new GetTodo());
    this.taskList$ = this.taskService.getTodo();
  }

  ngOnInit(): void {
    this.taskList$ = this.taskService.getTodo();
    console.log('OnInit');
  }

  public getTodo() {
    // this.store.dispatch(new GetTodo());
    this.taskList$ = this.taskService.getTodo();
    console.log('getTodo');
  }

  public addTodo(userInput: string) {
    this.taskService.addTodo(userInput);
  }

  public removeTodo(task: string) {
    this.taskService.removeTodo(task);
  }

  public editTodo(task: string) {
    this.taskService.editTodo(task);
    console.log('component');
  }
  /*
  Day:5: service test for removetodo
  value change in todo
  */
}
