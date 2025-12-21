import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <section class="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <h2>Hi, I'm Ben Hilarides</h2>
        <p class="intro">
          I am currently studying full stack Web Development, and this is my portfolio site showcasing what I have learned so far.
        </p>
      </section>

      <section class="study-focus-section">
        <h2>Desired Study Focus</h2>
        <p class="study-focus-items">What I want to focus on in my studies:</p>
        <ul class="study-focus-list">
          <li *ngFor="let item of studyFocusList">
            {{ item }}
          </li>
        </ul>
      </section>

      <section class="cta-section">
        <p>Want to learn more about me or see my work?</p>
        <p>Check out my <a routerLink="/about">About page</a> or take a peek at my <a routerLink="/projects">Projects page</a>!</p>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
    }

    .hero-section {
      text-align: center;
      margin-bottom: 40px;
      padding: 40px 20px;
    }

    .hero-section h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
      color: white;
    }

    .hero-section h2 {
      font-size: 1.8em;
      margin-bottom: 20px;
      color: light-grey;
    }

    .intro {
      font-size: 1.2em;
      line-height: 1.6;
      color: #666;
      max-width: 700px;
      margin: 0 auto;
    }

    .study-focus-section {
      margin-bottom: 40px;
      padding: 30px;
      background-color: #f9f9f9;
      border-radius: 8px;
    }

    .study-focus-section h2 {
      font-size: 2em;
      margin-bottom: 15px;
      color: #333;
    }

    .study-focus-items {
      font-size: 1.2em;
      margin-bottom: 20px;
      color: #555;
    }

    .study-focus-list {
      list-style-type: none;
      padding: 0;
    }

    .study-focus-list li {
      padding: 12px;
      margin-bottom: 10px;
      background-color: white;
      border-left: 4px solid #4CAF50;
      border-radius: 4px;
      font-size: 1.04em;
      color: #444;
    }

    .cta-section {
      text-align: center;
      padding: 30px;
      font-size: 1.2em;
    }

    .cta-section a {
      color: #4CAF50;
      text-decoration: none;
      font-weight: bold;
    }

    .cta-section a:hover {
      text-decoration: underline;
    }
    `]
})
export class HomeComponent {
  studyFocusList: string[] = [
    'Responsive Web Design',
    'Backend Development with Node.js',
    'Database Management with MongoDB',
    'Cloud Platforms and Deployment',
    'CI/CD Practices'
  ]
}
