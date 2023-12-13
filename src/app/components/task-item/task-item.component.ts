import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  constructor() {
    this.task = {} as Task;
  }
  @Input() task: Task;
}
