import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
      <header class="projects-header">
        <h1>My Projects</h1>
        <p class="subtitle">A showcase of work from my Web Development classes</p>
      </header>

      <section class="projects-grid">
        <div class="project-card" *ngFor="let project of projects">
          <div class="project-header">
            <h2>{{ project.name }}</h2>
            <span class="project-course">{{ project.course }}</span>
          </div>

          <div class="project-content">
            <p class="project-description">{{ project.description }}</p>

            <div class="tech-stack">
              <strong>Technologies:</strong>
              <div class="tech-tags">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
            </div>

            <div class="learnings">
              <strong>What I Learned:</strong>
              <ul>
                <li *ngFor="let learning of project.learnings">{{ learning }}</li>
              </ul>
            </div>

            <div class="project-links">
              <a [href]="project.githubLink" target="_blank" class="project-link" *ngIf="project.githubLink">
                <span>📂</span>GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 30px;
      color: #FFFFFF;
    }

    .projects-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .projects-header h1 {
      font-size: 2.8em;
      margin-bottom: 10px;
      color: #FFFFFF;
    }

    .subtitle {
      font-size: 1.2em;
      color: #CCCCCC;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
    }

    .project-card {
      background-color: #1a1a1a;
      border-radius: 8px;
      overflow: hidden;
      border: 2px solid #2a2a2a;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      border-color: #4CAF50;
    }

    .project-header {
      background-color: #2a2a2a;
      padding: 20px;
      border-bottom: 2px solid $4CAF50;
    }

    .project-header h2 {
      font-size: 1.5em;
      margin: 0 0 10px 0;
      color: #FFFFFF;
    }

    .project-course {
      display: inline-block;
      background-color: #4CAF50;
      color: #000000;
      padding: 4px 8px;
      border-radius: 10px;
      font-size: 0.9em;
      font-weight: bold;
    }

    .project-content {
      padding: 20px;
    }

    .project-description {
      font-size: 1.1em;
      line-height: 1.6;
      color: #CCCCCC;
      margin-bottom: 15px;
    }

    .tech-stack {
      margin-bottom: 15px;
    }

    .tech-stack strong {
      display: block;
      color: #4CAF50;
      margin-bottom: 8px;
      font-size: 1.1em;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tech-tag {
      background-color: #2a2a2a;
      color: #FFFFFF;
      padding: 6px 10px;
      border-radius: 10px;
      font-size: 0.9em;
      border: 1px solid #4CAF50;
    }

    .learnings {
      margin-bottom: 15px;
    }

    .learnings strong {
      display: block;
      color: #4CAF50;
      margin-bottom: 8px;
      font-size: 1.1em;
    }

    .learnings ul {
      list-style-position: inside;
      color: #CCCCCC;
      line-height: 1.8;
      margin: 0;
      padding-left: 10px;
    }

    .learnings li {
      margin-bottom: 6px;
    }

    .project-links {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #333333;
    }

    .project-link {
      flex: 1;
      min-width: 120px;
      background-color: #4CAF50;
      color: #000000;
      text-decoration: none;
      padding: 10px 15px;
      border-radius: 6px;
      text-align: center;
      font-weight: bold;
      transition: background-color 0.3s ease;
      font-family: 'Space Mono', monospace;
    }

    .project-link:hover {
      background-color: #45a049;
    }

    .project-link span {
      margin-right: 5px;
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Virtual Taco Stand',
      course: 'WEB-425',
      description: 'An interactive taco ordering application with menu browsing and order customization features.',
      technologies: ['Angular', 'TypeScript', 'CSS', 'HTML', 'Node.js'],
      learnings: [
        'Angular forms and data binding',
        'Component communication',
        'State management in Angular'
      ],
      githubLink: 'https://github.com/BHilarides/web-425/tree/main/virtual-taco-stand'
    }
  ]
}
