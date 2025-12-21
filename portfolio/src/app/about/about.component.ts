import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <section class="intro-section">
        <div class="profile-area">
          <img src="assets/hilarides-profile-pic.jpg" alt="Ben Hilarides Profile Picture" class="profile-photo">
          <div class="intro-text">
            <h1>About Me</h1>
            <p class="bio">
              Hi, I'm Ben Hilarides, a dedicated student learning full stack Web Development. This portfolio site showcases my journey and the skills I've acquired so far. I am also currently fully employed in a different field, but I am passionate about what I am learning and excited to continue on my journey into web development.
            </p>
          </div>
        </div>
      </section>

      <section class="interests-section">
        <h2>What I Enjoy</h2>

        <div class="interest-category">
          <h3>Coding and Technology</h3>
          <div class="interest-grid">
            <div class="interest-card" *ngFor="let interest of codingInterests">
              <h4>{{ interest.title }}</h4>
              <p>{{ interest.description }}</p>
            </div>
          </div>
        </div>

        <div class="interest-category">
          <h3>Outside of the Code</h3>
          <div class="interest-grid">
            <div class="interest-card" *ngFor="let interest of personalInterests">
              <h4>{{ interest.title }}</h4>
              <p>{{ interest.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="fun-facts-section">
        <h2>Quick Bits About Me</h2>
        <ul class="fun-facts-list">
          <li *ngFor="let fact of funFacts">
            {{ fact }}
          </li>
        </ul>
      </section>

      <section class="currently-section">
        <h2>Currently...</h2>
        <div class="currently-grid">
          <div class="currently-item">
            <strong>Learning:</strong>
            <p>{{ currentlyLearning }}</p>
          </div>
          <div class="currently-item">
            <strong>Building:</strong>
            <p>{{ currentlyBuilding }}</p>
          </div>
          <div class="currently-item">
            <strong>Reading:</strong>
            <p>{{ currentlyReading }}</p>
          </div>
          <div class="currently-item">
            <strong>Watching:</strong>
            <p>{{ currentlyWatching }}</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
      color: #444;
    }

    .intro-section {
      margin-bottom: 40px;
    }

    .profile-area {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .profile-photo {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #4CAF50;
    }

    .intro-text {
      flex: 1;
      max-width: 300px;
    }

    .intro-text h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }

    .tagline {
      font-size: 1.5em;
      color: #666;
      margin-bottom: 15px;
      font-style: italic;
    }

    .bio {
      font-size: 1.1em;
      line-height: 1.6;
      color: #CCCCCC;
    }

    .interest-section {
      margin-bottom: 40px;
    }

    .interests-section h2 {
      font-size: 2em;
      margin-bottom: 20px;
      text-align: center;
    }

    .interest-category h3 {
      font-size: 1.5em;
      margin-bottom: 15px;
      color: #333;
    }

    .interest-category {
      margin-bottom: 30px;
    }

    .interest-category h3 {
      font-size: 1.5em;
      margin-bottom: 15px;
      color: #333;
    }

    .interest-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }

    .interest-card {
      background-color: #f8f8f8;
      padding: 15px;
      border-radius: 8px;
    }

    .interest-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .interest-card h4 {
      font-size: 1.2em;
      margin-bottom: 10px;
      color: #4CAF50;
    }

    .interest-card p {
      color: #555;
      line-height: 1.4;
    }

    .fun-facts-section {
      margin-bottom: 40px;
      background-color: #1a1a1a;
      padding: 20px;
      border-radius: 8px;
    }

    .fun-facts-section h2 {
      font-size: 2em;
      margin-bottom: 15px;
      text-align: center;
    }

    .fun-facts-list {
      list-style-type: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 15px;
    }

    .fun-facts-list li {
      padding: 10px;
      background-color: #2a2a2a;
      border-radius: 4px;
      border-left: 3px solid #4CAF50;
      color: #CCCCCC;
    }

    .currently-section {
      margin-bottom: 40px;
    }

    .currently-section h2 {
      font-size: 2em;
      margin-bottom: 25px;
      text-align: center;
    }

    .currently-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }

    .currently-item {
      background-color: #1a1a1a;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
    }

    .currently-item strong {
      display: block;
      font-size: 1.2em;
      margin-bottom: 10px;
      color: #4CAF50;
    }

    .currently-item p {
      color: #CCCCCC;
      margin: 0;
    }

    @media (max-width: 768px) {
      .profile-area {
        flex-direction: column;
        align-items: center;
      }
    }
`]
})
export class AboutComponent {
  codingInterests = [
    {
      title: 'Full-Stack Development',
      description: 'I enjoy building complete web applications, from the front-end user interface to the back-end server logic and database management.'
    },
    {
      title: 'DevOps and Automation',
      description: 'I am consistently fascinated by the processes that streamline development and deployment, including CI/CD pipelines and cloud services.'
    },
    {
      title: 'Debugging and Problem Solving',
      description: 'I have always found great satisfaction from troubleshooting - at first it was building custom PCs and it has evolved to troubleshooting code and system issues.'
    },
    {
      title: 'Continued Learning of Python and JavaScript',
      description: 'I am passionate about deepening my understanding of programming languages, particularly Python and JavaScript, to enhance my coding skills.'
    }
  ];

  personalInterests = [
    {
      title: 'Videogames',
      description: 'Despite still being on screen, I enjoy playing games in my spare time with a rich community of friends I have built over the years.'
    },
    {
      title: 'Personal Fitness',
      description: 'All things come in balance, and I like to try and keep myself fit to balance out the amount of time I sit at the computer.'
    },
    {
      title: 'Coaching Youth Lacrosse',
      description: 'I have a passion for working with kids and helping them grow both in sports and in life.'
    },
    {
      title: 'Painting',
      description: 'I enjoy painting with acrylic on canvas, often creating landscapes and scenery in my free time.'
    }
  ];

  funFacts = [
    'I enjoy espresso, and have multiple espresso machines at home.',
    'I enjoy playing extraction-style first-person shooters like Escape from Tarkov and Arc Raiders.',
    'I have coached lacrosse for 5 years, working with kids aged 5-18.',
    'I was a high school state champion, and played division III college lacrosse.',
    'I did not build my first PC until I was 27 years old.',
    'I have a collection of over 10 acrylic paintings that I have created myself.'
  ];

  currentlyLearning = 'Advanced JavaScript concepts, TypeScript, and Angular framework.';
  currentlyBuilding = 'A personal project portfolio using Angular.';
  currentlyReading = '"The DevOps Handbook" by Gene Kim, Jez Humble, Patrick Debois, and John Willis.';
  currentlyWatching = 'Landman'
}
