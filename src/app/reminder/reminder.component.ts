import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { TopnavallComponent } from "../topnavall/topnavall.component";

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [FormsModule, SidebarComponent, TopnavallComponent],
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent {

  studentId: string = '';
  reminderMessage: string = '';
  reminderType: string = '';

  constructor() {}

  sendReminder() {
    const reminderData = {
      studentId: this.studentId,
      reminderMessage: this.reminderMessage,
      reminderType: this.reminderType
    };

    // Simulate reminder send success message
    console.log('Reminder sent successfully:', reminderData);
    alert('Reminder sent successfully!');

    // Clear form fields after sending the reminder
    this.studentId = '';
    this.reminderMessage = '';
    this.reminderType = '';
  }
}
