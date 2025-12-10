import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Guild } from '../create-guild/create-guild.component';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Created Guilds</h1>

      @if(guilds.length > 0) {
        <div class="guild-container">
          @for(guild of guilds; track guild) {
            <div class="guild-card">
              <h2>Guild Name: {{ guild.guildName }}</h2>
              <h3>Description:</h3>
              <p>{{ guild.description }}</p>
              <h3>Type:</h3>
              <p>{{ guild.type }}</p>
              <h3>Notification Preference:</h3>
              <ul>
                @for(pref of guild.notificationPreferences; track pref) {
                <li>{{ pref }}</li>
                }
              </ul>
            </div>
          }
        </div>
  } @else {
    <p>No Guilds created yet.</p>
  }
  `,
  styles: [`
  .guild-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;
    }

    .guild-card {
      flex: 0 0 calc(33% - 20px);
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin: 10px 0;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin-bottom: 5px;
      padding: 5px;
    }
  `]
})
export class GuildListComponent {
  @Input() guilds: Guild[] = [];
}
