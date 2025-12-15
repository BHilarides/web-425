import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Component } from '@angular/core';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    @if(factions && factions.length > 0) {
      <div class="faction-container">
        <h1>Available Factions</h1>
        <div class="faction-cards">
          @for(faction of factions; track faction.name) {
            <div class="faction-card">
              <h3>{{ faction.name }}</h3>
              <p>{{ faction.description }}</p>
            </div>
          }
        </div>
      </div>
    } @else {
      <div class="characterFactions">
        <h1>{{ errorMessage }}</h1>
      </div>
    }
  `,
  styles: `
  .faction-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .faction-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
  }

  .faction-card {
    flex: 0 0 40%;
    margin: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 8px;
    background: #fff;
    min-width: 300px;
  }

  .faction-card h3 {
    margin-top: 0;
    color: #333;
  }

  .faction-card p {
    color: #656;
    line-height: 1.6;
  }

  .characterFactions {
    text-align: center;
    padding: 40px;
    color: #d32f2f
  }

  @media (max-width: 768px) {
    .faction-card {
      flex: 0 0 100%
    }
  }

  `
})
export class CharacterFactionComponent {
  factions: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://localhost:3000/api/character-factions').subscribe({
      next: (res) => {
        this.factions = res;
      },
      error: (err) => {
        console.error('Error fetching factions', err);

        if (err.status === 404) {
          this.errorMessage = 'Character factions not found.';
        } else if (err.status === 0) {
          this.errorMessage = 'Unable to connect to server. Please ensure the API is running.';
        } else {
          this.errorMessage = 'Error loading factions. Please try again later.';
        }
      }
    });
  }
}
