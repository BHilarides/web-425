import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img src="/assets/RPG-banner.png" alt="website banner for RPG Character Builder" class="banner-img">
      </header>

      <main class="main-content">

        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a href="#">Create Character</a></li>
            <li><a href="#">View Characters</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </nav>

        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a> |
          <a href="#">Create Character</a> |
          <a href="#">View Characters</a> |
          <a href="#">Settings</a> |
          <a href="#">Help</a>
        </nav>
        <p>&copy; 2025 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [`
  `]
})
export class AppComponent {
  title = 'rpg-character-builder';
}
