import { UpperCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-task-card',
  imports: [UpperCasePipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  readonly taskData = input.required<any>();
  readonly taskCompleted = output<string>();
  readonly taskDeleted = output<any>();
}
