import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img src="assets/hilarides-portfolio-banner.png" alt="Ben Hilarides Portfolio banner" class="banner-img">
      </header>

    <main class="main-content">
      <section class="content">
        <router-outlet />
      </section>

      <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/about">About</a></li>
            <li><a routerLink="/resume">Resume</a></li>
            <li><a routerLink="/projects">Projects</a></li>
          </ul>
        </nav>

    </main>

    <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> |
          <a routerLink="/about">About</a> |
          <a routerLink="/resume">Resume</a> |
          <a routerLink="/projects">Projects</a>
        </nav>
        <p>&copy; 2025 Ben Hilarides</p>
      </footer>
    </div>
  `,
// styles: [
//    `
//
//    `
//  ]
})
export class AppComponent {
  title = 'portfolio';
}
