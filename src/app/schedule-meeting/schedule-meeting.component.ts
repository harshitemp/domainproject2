import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { TopnavallComponent } from "../topnavall/topnavall.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-schedule-meeting',
  standalone: true,
  imports: [FormsModule, SidebarComponent, TopnavallComponent,HttpClientModule // Add HttpClientModule here
  ],
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent {
  
  meetingDate: string = '';

  constructor() {}

  scheduleMeeting() {
    if (!this.meetingDate) {
      alert('Please select a date for the meeting');
      return;
    }

    const meetingData = {
      meetingDate: this.meetingDate
    };

    // Simulate scheduling success
    console.log('Meeting scheduled successfully:', meetingData);
    alert('Meeting scheduled successfully!');

    // Clear the input after scheduling
    this.meetingDate = '';
  }
}
