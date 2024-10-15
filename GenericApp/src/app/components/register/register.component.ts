import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = { id: 0, username: '', email: '' };
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.authService.register(this.user)
      .subscribe(
        () => {
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Registration failed', error);
        }
      );
  }
}
