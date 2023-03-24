//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(TaskService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);

    // service = new TaskService();
  });

  it('should create a post in an array', () => {
    const sText = 'This is my first post';
    service.addTodo(sText);
    expect(service['taskList'].length).toEqual(1);
    expect(service['taskList'][0]).toEqual('This is my first post');
  });

  it('should emit new task', () => {
    service.getTodo().subscribe((newval) => expect(newval).toEqual(['test']));
    service.addTodo('test');
  });

  it('should remove new task', () => {
    service.addTodo('test');
    expect(service['taskList'].length).toEqual(1);
    service.removeTodo('test');
    service.getTodo().subscribe((newval) => expect(newval).toEqual(['']));
  });
});
