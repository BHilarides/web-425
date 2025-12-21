import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container">
      <div class="error-content">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Page Not Found</h2>
        <p class="error-message">
          Oops, it appears the page you are searching for has wandered off, in search of digital butterflies. Please return with net to provide assistance.
        </p>

        <div class="suggestions">
          <p>Perhaps some help to get back on track
          :</p>
          <div class="link-grid">
            <a routerLink="/home" class="nav-link">
              <span class="icon">🏠</span>
              <span>Home</span>
            </a>
            <a routerLink="/about" class="nav-link">
              <span class="icon">👤</span>
              <span>About Me</span>
            </a>
            <a routerLink="/resume" class="nav-link">
              <span class="icon">📄</span>
              <span>Resume</span>
            </a>
            <a routerLink="/projects" class="nav-link">
              <span class="icon">💻</span>
              <span>Projects</span>
            </a>
          </div>
        </div>

        <div class="fun-fact">
          <p><strong>Fun Fact:</strong>
            The 404 error code come from room 404 at CERN, where the World Wide WEb was born. If developers could not find a file they would refer to it as "404".
          </p>
          <p class="disclaimer">*In fact a myth, but it is fun<p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      color: #FFFFFF;
    }

    .error-content {
      max-width: 700px;
      text-align: center;
    }

    .error-code {
      font-size: 8em;
      margin: 0;
      color: #4CAF50;
      font-weight: bold;
      text-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }

    .error-title {
      font-size: 2.5em;
      margin: 20px 0;
      color: #FFFFFF;
    }

    .error-message {
      font-size: 1.2em;
      color: #CCCCCC;
      margin-bottom: 40px;
      line-height: 1.6;
    }

    .suggestions {
      margin-bottom: 40px;
    }

    .suggestions > p {
      font-size: 1.1em;
      color: #CCCCCC;
      margin-bottom: 25px;
    }

    .link-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .nav-link {
      background-color: #2a2a2a;
      color: #FFFFFF;
      text-decoration: none;
      padding: 20px;
      border-radius: 8px;
      border: 2px solid #4CAF50;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      font-family: 'Space Mono', monospace;
    }

    .nav-link:hover {
      background-color: #4CAF50;
      color: #000000;
      transform: translateY(-5px);
      box-shadow: 0 5px 20px rgba(76, 175, 80, 0.4);
    }

    .icon {
      font-size: 2em;
    }

    .nav-link span:last-child {
      font-size: 1.1em;
      font-weight: bold;
    }

    .fun-fact {
      background-color: #1a1a1a;
      padding: 25px;
      border-radius: 8px;
      border-left: 4px solid #4CAF50;
      text-align: left;
      margin-top: 40px;
    }

    .fun-fact p {
      color: #CCCCCC;
      line-height: 1.6;
      margin: 10px 0;
    }

    .fun-fact strong {
      color: #4CAF50;
    }

    .disclaimer {
      font-size: 0.9em;
      font-style: italic;
      color: #999999;
    }

    @media (max-width: 768px) {
      .error-code {
        font-size: 5em;
      }

      .error-title {
        font-size: 2em;
      }

      .link-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    `]
})
export class NotFoundComponent {

}
