import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { Todo } from 'src/app/task';
import { TaskService } from 'src/app/task.service';
import { GetTodo } from '../actions/task.action';

export class TaskStateModel {
  tasks: Todo[] = [];
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: [],
  },
})
@Injectable()
export class TaskState {
  constructor(private taskService: TaskService) {}

  // slice data from state
  @Selector()
  static getTaskList(state: TaskStateModel) {
    return state.tasks;
  }

  // update state
  @Action(GetTodo)
  getTodos({ getState, setState }: StateContext<TaskStateModel>) {
    console.log('state.action');

    // return this.taskService.getTodo().pipe(
    //   tap((res) => {
    //     console.log(res, 'tap.res');
    //     const state = getState();
    //     console.log('state.after', state);

    //     setState({ ...state, res});
    //   })
    // );

    // .subscribe((res) => console.log(res, 'state'));
  }
}
