import { Component, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { TopnavComponent } from "../topnav/topnav.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [SidenavComponent, TopnavComponent, FormsModule, ReactiveFormsModule, CommonModule,HttpClientModule],
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  campusDrives: { [key: string]: boolean } = {
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

  additionalCompanies: string[] = []; // Initialize as an empty array

  constructor() {}

  addCompany(): void {
    const newCompany = prompt('Enter the company name:');
    if (newCompany) {
      const companyName = newCompany.toLowerCase();
      if (!this.additionalCompanies.includes(companyName)) {
        this.additionalCompanies.push(companyName);
        this.campusDrives[companyName] = false;
      } else {
        alert('Company already added.');
      }
    }
  }

  submitTraining() {
    // Simulate submitting the training session details
    console.log('Training session data submitted:', this.campusDrives);
    alert('Training session data submitted successfully!');
  }

  register() {
    // Simulate registration for the campus drive
    console.log('Registration data:', this.registration);
    alert('Registration completed successfully!');
  }

  logout() {
    // Simulate logout logic
    console.log('Logged out successfully');
    alert('You have been logged out!');
  }
}
