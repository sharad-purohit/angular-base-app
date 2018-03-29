import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../security/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private tokenService: TokenService) { }

  ngOnInit() {
  }

  signOut() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('login');
  }
}
