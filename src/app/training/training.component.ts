import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { SidenavComponent } from '../sidenav/sidenav.component';
import { Footer1Component } from "../footer1/footer1.component";
import { FeedbackComponent } from "../feedback/feedback.component";
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClient and HttpClientModule

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [SidenavComponent, Footer1Component, FeedbackComponent, HttpClientModule], // Add HttpClientModule here
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {

  campusDrives = {
    tcs: false,
    wipro: false,
    accenture: false
  };

  registration = {
    name: '',
    regNumber: '',
    stream: 'CSE',
    mobile: '',
    campuses: {
      vizianagaram: false,
      bhubaneswar: false
    }
  };

  constructor(private router: Router, private http: HttpClient) {} // Inject HttpClient

  submitTraining() {
    // Prepare data for submission
    const trainingData = {
      campusDrives: this.campusDrives
    };

    // Simulate submission of training session data (or send to backend)
    console.log('Training session submitted:', trainingData);
    alert('Training session submitted successfully!');

    // Optionally send training data to the backend
    // this.http.post('YOUR_API_ENDPOINT/training', trainingData).subscribe(
    //   response => {
    //     console.log('Server response:', response);
    //     this.router.navigate(['/upcoming']); // Navigate on successful response
    //   },
    //   error => {
    //     console.error('Error occurred:', error);
    //   }
    // );

    // Navigate to the "Upcoming" page
    this.router.navigate(['/upcoming']);
  }

  register() {
    // Prepare registration data
    const registrationData = this.registration;

    // Simulate registration data logging (or send to backend)
    console.log('Registration Data:', registrationData);
    alert('Registration completed successfully!');

    // Optionally send registration data to the backend
    // this.http.post('YOUR_API_ENDPOINT/registration', registrationData).subscribe(
    //   response => {
    //     console.log('Server response:', response);
    //     this.router.navigate(['/upcoming']); // Navigate on successful response
    //   },
    //   error => {
    //     console.error('Error occurred:', error);
    //   }
    // );

    // Navigate to the "Upcoming" page
    this.router.navigate(['/upcoming']);
  }
}
