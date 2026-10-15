import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-notification-bell',
  imports: [],
  templateUrl: './notification-bell.html',
  styleUrl: './notification-bell.scss',
})
export class NotificationBell {
  // Expecting a plain text from parent
  readonly alertMessage = input.required<string>();

  // Ready to shout out a signal when dismissed
  readonly alertDismissed = output<void>();
}
