import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="resume-container">
      <header class="resume-header">
        <h1>Ben Hilarides</h1>
        <p class="title">Full Stack Web Developer in Training</p>
        <div class="contact-info">
          <span>Email: ben.hilarides26&#64;gmail.com</span> |
          <span>Located: Falls Church, VA</span> |
          <span>Find Out More: <a href="https://www.linkedin.com/in/benhilarides/" target="_blank">LinkedIn</a></span> |
          <span>See my code: <a href="https://github.com/BHilarides" target="_blank">GitHub</a></span>
        </div>
        <button class="download-btn" (click)="downloadResume()">
          Download Resume (PDF)
        </button>
      </header>

      <section class="resume-section">
        <h2>Professional Summary</h2>
        <p class="summary">
          I am currently an outside sales representative fully employed by the Sherwin-Williams Company, working in association with Lowe's Home Improvement. Currently I am studying full stack Web Development thorough a program offered by Bellevue University. Through this course I have found myself very passionate about DevOps practices, and am excited to continue my journey into web development and related fields.
        </p>
      </section>

      <section class="resume-section">
        <h2>Education</h2>
        <div class="education-item" *ngFor="let edu of education">
          <div class="item-header">
            <h3>{{ edu.degree }}</h3>
            <span class="date">{{ edu.date }}</span>
          </div>
          <p class="institution">{{ edu.institution }}</p>
          <p class="details" *ngIf="edu.details">{{ edu.details }}</p>
        </div>
      </section>

      <section class="resume-section">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category" *ngFor="let category of skillCategories">
            <h3>{{ category.name }}</h3>
            <div class="skill-tags">
              <span class="skill-tag" *ngFor="let skill of category.skills">{{ skill }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="resume-section">
        <h2>Experience</h2>
        <div class="experience-item" *ngFor="let exp of experience">
          <div class="item-header">
            <div>
              <h3>{{ exp.title }}</h3>
              <p class="company">{{ exp.company }}</p>
            </div>
            <span class="date">{{ exp.date }}</span>
          </div>
          <ul class="responsibilities">
            <li *ngFor="let responsibility of exp.responsibilities">
             {{ responsibility }}
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section">
        <h2>Certifications and Awards</h2>
        <div class="cert-item" *ngFor="let cert of certifications">
          <div class="item-header">
            <h3>{{ cert.name }}</h3>
            <span class="date">{{ cert.date }}</span>
          </div>
          <p class="issuer">{{ cert.issuer }}</p>
        </div>
      </section>

      <section class="resume-section">
        <h2>Projects</h2>
        <div class="project-item" *ngFor="let project of projects">
          <h3>{{ project.name }}</h3>
          <p class="project-tech">Technologies: {{ project.technologies }}</p>
          <p>{{ project.description }}</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .resume-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      color: #FFFFFF;
      background-color: #1e1e1e;
      border-radius: 8px;
    }

    .resume-header {
      text-align: center;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 2px solid #444;
    }

    .resume-header h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
      color: #FFFFFF;
    }

    .title {
      font-size: 1.2em;
      color: #4CAF50;
      margin-bottom: 10px;
    }

    .contact-info {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
      margin-bottom: 15px;
      color: #CCCCCC;
    }

    .contact-info a {
      color: #4CAF50;
      text-decoration: none;
    }

    .contact-info a:hover {
      text-decoration: underline;
    }

    .download-btn {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1em;
      transition: background-color 0.3s ease;
      font-family: 'Space Mono', monospace;
    }

    .download-btn:hover {
      background-color: #45a049;
    }

    .resume-section {
      margin-bottom: 40px;
    }

    .resume-section h2 {
      font-size: 2em;
      margin-bottom: 20px;
      color: #4CAF50;
      border-bottom: 2px solid #444;
      padding-bottom: 10px;
    }

    .summary {
      font-size: 1.1em;
      line-height: 1.6;
      color: #CCCCCC;
    }

    .education-item, .experience-item, .cert-item, .project-item {
      margin-bottom: 20px;
      padding: 20px;
      background-color: #2a2a2a;
      border-radius: 6px;
      border-left: 4px solid #4CAF50;
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
      flex-wrap: wrap;
      gap: 10px;
    }

    .item-header h3 {
      font-size: 1.5em;
      margin: 0;
      color: #FFFFFF;
    }

    .date {
      color: #4CAF50;
      font-weight: bold;
      white-space: nowrap;
    }

    .institution, .company, .issuer {
      font-size: 1.1em;
      color: #CCCCCC;
      line-height: 1.4;
    }

    .details {
      color: #CCCCCC;
      line-height: 1.4;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .skill-category {
      background-color: #2a2a2a;
      padding: 15px;
      border-radius: 6px;
    }

    .skill-category h3 {
      font-size: 1.3em;
      margin-bottom: 10px;
      color: #FFFFFF;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .skill-tag {
      background-color: #1a1a1a;
      color: #FFFFFF;
      padding: 8px 15px;
      border-radius: 20px;
      font-size: 0.9em;
      border: 1px solid #4CAF50;
    }

    .responsibilities {
      list-style-position: inside;
      color: #CCCCCC;
      line-height: 1.4;
    }

    .responsibilities li {
      margin-bottom: 8px;
    }

    .project-tech {
      color: #4CAF50;
      font-style: italic;
      margin-bottom: 10px;
    }

    .project-item p {
      color: #CCCCCC;
      line-height: 1.4;
    }

    @media (max-width: 768px) {
      .item-header {
        flex-direction: column;
      }

      .contact-info {
        flex-direction: column;
        gap: 5px;
      }
    }
  `]
})
export class ResumeComponent {
  education = [
    {
      degree: 'B.S. Web Development',
      institution: 'Bellevue University',
      date: '2024 - Present',
      details: 'Pursuing a Bachelors of Science in Web Development, focusing on full stack development, DevOps practices, and modern web technologies.'
    },
    {
      degree: 'B.A. Psychology',
      institution: 'Washington and Jefferson College',
      date: '2007 - 2011',
      details: 'Completed a bachelor of Arts in Psychology, with a minor in Business Administration, while actively participating in the Lacrosse program.'
    }
  ];

  skillCategories = [
    {
      name: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Responsive Design']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Python']
    },
    {
      name: 'Database',
      skills: ['MongoDB', 'SQL']
    },
    {
      name: 'DevOps & Tools',
      skills: ['Git & GitHub', 'Docker', 'CI/CD', 'VS Code']
    }
  ];

  experience = [
    {
      title: 'Outside Sales Representative',
      company: 'Sherwin-Williams Company',
      date: '2020 - Present',
      responsibilities: [
        'Manage territory consisting of four Lowe\'s Home Improvement stores, building relationships with store management and customers to drive sales growth.',
        'Utilized CRM tools to track customer interactions and sales performance',
        'Managed inventory and trained with associates in store, to sell upwards of $6,000,000 in paint and related products annually.'
      ]
    },
    {
      title: 'Bartender',
      company: 'Service Industry, DMV Area',
      date: '2015 - 2020',
      responsibilities: [
        'Provided excellent customer service in fast-paced environments, managing multiple tasks efficiently.',
        'Handled cash and credit transactions accurately, ensuring proper accounting at the end of each shift.',
        'Trained new staff on company policies, drink recipes, and customer service techniques.'
      ]
    }
  ];

  certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'In Progress'
    }
  ];

  projects = [
    {
      name: 'Virtual Taco Stand',
      technologies: 'Angular, Typescript, HTML, CSS',
      description: 'Built an interactive ordering application with component-based architecture and routing to simulate a taco stand experience.'
    },
    {
      name: 'RPG Character Creator',
      technologies: 'Angular, Typescript, HTML, CSS',
      description: 'Developed a character creation tool for role-playing games, featuring dynamic forms and data binding to customize character attributes.'
    }
  ];

  downloadResume() {
    // Link to download resume
    const link = document.createElement('a');
    link.href = 'assets/hilarides-resume.pdf';
    link.download = 'hilarides-resume.pdf';
    link.click();
  }
}
