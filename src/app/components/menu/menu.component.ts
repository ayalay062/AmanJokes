import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  user: string | undefined;
  constructor(private authService: AuthService, private route: Router) { }
  ngOnInit(): void {
    this.authService.userChanged.subscribe(x => {
      this.user = x;
    })
    this.user = this.authService.isAuth();
  
  }

  logout() {
    this.authService.removeUser();
    this.user = this.authService.isAuth();
    this.route.navigateByUrl('login');
  }

}
