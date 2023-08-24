import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private fb: FormBuilder, private route:Router
  ) { }
  form = this.fb.group({
    userName: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Zא-תa-zd$@$!%*?&].{7,}'
      ),
    ]),
  });
  get userName() {
    return this.form.get('userName');
  }
  get password() {
    return this.form.get('password');
  }
  login() {
    if (this.authService.login(this.userName?.value || '', this.password?.value || '')) {

      Swal.fire('', 'You have logged in successfully', 'success');
      this.route.navigateByUrl('jokes');
    }
    else{
      Swal.fire('Ooops', 'Invalid username and password', 'error');

    }

  }
}
