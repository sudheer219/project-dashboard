import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCard } from './task-card/task-card';
import { NotificationBell } from './notification-bell/notification-bell';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskCard, NotificationBell],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project-dashboard');

  protected readonly task = signal({
    id: 'TASK-101',
    name: 'Build login authentication layout',
    status: 'In Progress'
  });

  protected readonly INITIAL_TASKS = [
    { id: 'TASK-101', name: 'Build login layout', status: 'In Progress' },
    { id: 'TASK-102', name: 'Setup database links', status: 'In Progress' },
    { id: 'TASK-103', name: 'Write user documentation', status: 'Completed' }
  ];

  protected readonly taskList = signal<any[]>([...this.INITIAL_TASKS]);

  // For Empty array
  // protected readonly taskList = signal<any[]>([]);

  readonly currentAlert = signal<string>('System Maintenance at 12:30 AM');

  readonly newTaskTitle = signal<string>('');

  completeTask(taskId: string) {
    this.taskList.update(currentList => {
      let newList = [];

      for (let task of currentList) {
        if (task.id === taskId) {
          let updatedTask = {
            id: task.id,
            name: task.name,
            status: 'Completed'
          };
          newList.push(updatedTask)
        } else {
          newList.push(task)
        }
      }
      return newList;
    })
  }

  resetDashboard() {
    this.taskList.set([...this.INITIAL_TASKS]);
  }

 handleTaskSubmit(inputElement: HTMLInputElement) {
    const title = inputElement.value.trim();

    if (!title.trim()) return;

    const freshTask = {
      id: `TASK-${String(Date.now()).slice(-4)}`,
      name: title,
      status: 'In Progress'
    }


    this.taskList.update(currentTasks => [freshTask, ...currentTasks]);

    inputElement.value = '';
  }

  deleteTask(taskId:string){
    this.taskList.update(currentTask => currentTask.filter(task => task.id !== taskId))
  }



}
