import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderloginComponent } from '../headerlogin/headerlogin.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-login',
  standalone: true,  // Mark it as a standalone component
  imports: [
    CommonModule,    // Import necessary modules directly
    FormsModule,
    NavbarComponent, // Import other components if they are standalone
    HeaderloginComponent,
    RouterLink,
    HttpClientModule  // Add HttpClientModule here
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedForm: string | undefined;
  formData: any = { email: '', password: '' }; // Initialize formData

  constructor(private router: Router) {}  // Inject Router service

  showForm(formType: string) {
    this.selectedForm = formType;
  }

  onSubmit() {
    if (this.selectedForm) {
      const loginData = {
        email: this.formData.email,
        password: this.formData.password,
        userType: this.selectedForm
      };

      // Simulate login success and display a message
      console.log('Simulated login successful:', loginData);
      alert(`Login successful for ${loginData.userType}!`);

      // Reset form fields
      this.formData = { email: '', password: '' };

      // Navigate based on the selected user type
      if (this.selectedForm === 'student') {
        this.router.navigate(['/student-registration']);
      } else if (this.selectedForm === 'university') {
        this.router.navigate(['/pursuitmanager']);
      } else if (this.selectedForm === 'company') {
        this.router.navigate(['/training']);
      } else if (this.selectedForm === 'coordinators') {
        this.router.navigate(['/coordinatorsdashboard']);
      }
    }
  }
}
