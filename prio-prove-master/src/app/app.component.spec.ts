import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { TaskService } from './task.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: TaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [TaskService],
    }).compileComponents();


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TaskService);
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Click on button called addTodo with given input', () => {
    const btn = fixture.debugElement.query(By.css('.btn-success'));
    expect(btn.nativeElement.textContent.trim()).toContain('Add NewTask');
  });

  it('Click on button called addTodo with given input', () => {
    const spy = spyOn(service, 'addTodo');
    component.addTodo('SomeTest');
    expect(spy).toHaveBeenCalledWith('SomeTest');
  });

  it('Click on button called removeTodo with given input', () => {
    const spy = spyOn(service, 'removeTodo');
    component.removeTodo('SomeTest');
    expect(spy).toHaveBeenCalledWith('SomeTest');
  });
});
