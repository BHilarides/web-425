import { Component, OnInit } from '@angular/core';

import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { AuthService } from './auth.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img src="/assets/RPG-banner.png" alt="website banner for RPG Character Builder" class="banner-img">
      </header>

      <div class="sign-in-container">
        @if (email) {
          <p>Welcome, {{ email }} !</p>
          <button (click)="signout()">Sign Out</button>
        } @else {
          <a routerLink="/signin" class="sign-in-link">Sign In</a>
        }
      </div>

      <main class="main-content">

        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/players">Players</a></li>
            <li><a routerLink="/signin">SignIn</a></li>
            <li><a routerLink="/create-character">Create Character</a></li>
            <li><a routerLink="/create-guild">Create Guild</a></li>
            <li><a routerLink="/character-factions">Character Faction</a></li>
          </ul>
        </nav>

        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
            <a routerLink="/">Home</a> |
            <a routerLink="/players">Players</a> |
            <a routerLink="/signin">SignIn</a> |
            <a routerLink="/create-character">Create Character</a> |
            <a routerLink="/create-guild">Create Guild</a> |
            <a routerLink="/character-factions">Character Faction</a>
        </nav>
        <p>&copy; 2025 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [`
  `]
})
export class AppComponent implements OnInit{
  email?: string;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if (isAuth) {
        this.email = this.cookieService.get('session_user');
      } else {
        this.email = undefined;
      }
    });
  }

  signout() {
    this.email = undefined;
    this.authService.signout();
  }
}
