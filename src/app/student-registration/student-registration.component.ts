import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TopnavComponent } from '../topnav/topnav.component';
import { FeedbackComponent } from "../feedback/feedback.component";
import { Footer1Component } from "../footer1/footer1.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClient and HttpClientModule

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TopnavComponent,
    FeedbackComponent,
    Footer1Component,
    CommonModule,
    HttpClientModule // Add HttpClientModule here
  ],
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {} // Inject HttpClient

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: [''],

      degree: ['', Validators.required],
      department: ['', Validators.required],
      college: ['', Validators.required],
      yearOfPassing: ['', Validators.required],
      percentage: ['', Validators.required],

      completedTrainings: [''],
      skills: [''],
      preferredTraining: [''],

      interestedInPlacement: [false],
      preferredJobRoles: [''],
      preferredLocation: [''],
      resume: [null],
      linkedin: [''],
      portfolio: [''],

      extracurricularActivities: [''],
      languagesKnown: [''],
      achievements: [''],
      additionalInformation: [''],

      declaration: [false, Validators.requiredTrue] 
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Prepare data for submission
      const formData = this.registrationForm.value;

      // Simulate successful registration (or send data to backend)
      console.log('Registration successful', formData);
      alert('Registration successful!');

      // Optionally, send data to a backend API
      // this.http.post('YOUR_API_ENDPOINT', formData).subscribe(
      //   response => {
      //     console.log('Server response:', response);
      //     this.router.navigate(['/cv-form']);
      //     this.registrationForm.reset(); // Reset form on successful response
      //   },
      //   error => {
      //     console.error('Error occurred:', error);
      //   }
      // );

      // Navigate to the CV form page
      this.router.navigate(['/cv-form']);

      // Reset the form after successful registration
      this.registrationForm.reset();
    } else {
      console.error('Form is not valid:');
      console.error('Form Errors:', this.registrationForm.errors);

      // Log validation errors for each control
      Object.keys(this.registrationForm.controls).forEach((key) => {
        const control = this.registrationForm.get(key);
        if (control && control.invalid) {
          console.error(`Control ${key} is invalid:`, control.errors);
        }
      });
    }
  }
}
