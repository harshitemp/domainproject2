import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent, RouterLink], // Add CommonModule here
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  selectedForm: string | null = null;
  formData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  showForm(formType: string) {
    this.selectedForm = formType;
  }

  onSubmit() {
    if (this.selectedForm) {
      const userType = this.selectedForm;
      const data = {
        email: this.formData.email,
        password: this.formData.password,
        userType: userType
      };

      // Simulate successful registration
      console.log('User registered successfully:', data);
      alert('User registered successfully!');

      // Redirect to respective route after simulated registration
      this.router.navigate([`/${userType}`]);

      // Reset the form data after registration
      this.formData = { email: '', password: '' };
    }
  }
}
