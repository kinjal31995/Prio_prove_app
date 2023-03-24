export class AddTodo {
  static readonly type = '[Todo] Add';
  constructor(public payload: string) {}
}
export class EditTodo {
  static readonly type = '[Todo] Edit';
  constructor(public payload: string) {}
}
export class RemoveTodo {
  static readonly type = '[Todo] Remove';
  constructor(public payload: string) {}
}
export class GetTodo {
  static readonly type = '[Todo] Get';
}