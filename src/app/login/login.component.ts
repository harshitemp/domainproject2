// login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderloginComponent } from '../headerlogin/headerlogin.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,  // Mark it as a standalone component
  imports: [
    CommonModule,    // Import necessary modules directly
    FormsModule,
    NavbarComponent, // Import other components if they are standalone
    HeaderloginComponent,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedForm: string | undefined;
  formData: any = { email: '', password: '' }; // Initialize formData

  constructor() {}

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
    }
  }
}
