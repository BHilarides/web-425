export interface Players {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div>
      <h1>Players in The Game</h1>
      <p>
      If you haven't built your character yet, please pick from one of the following characters to get started!
      </p>
      <ul class="players-container">
        @for(player of players; track player) {
          <li class="player-item">
          <div class="card">
            <h3>{{ player.name }}</h3>
            <p>{{ player.gender }}</p>
            <p>{{ player.class }}</p>
            <p>{{ player.faction }}</p>
            <p>{{ player.startingLocation }}</p>
            <p>{{ player.funFact }}</p>
          </div>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
    .players-container {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
    }

    .player-item {
      flex: 0 1 calc(33.333% - 20px);
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .card {
      padding: 20px;
      background-color: white;
      color: black;
    }
    `
  ]
})
export class PlayersComponent {
  players: Players[];

  constructor() {
    this.players = [
      {
        "name": "Arin the Brave",
        "gender": "Male",
        "class": "Warrior",
        "faction": "Kingdom of Light",
        "startingLocation": "Castle Town",
        "funFact": "Loves collecting ancient weapons"
      },
      {
        "name": "Luna the Wise",
        "gender": "Female",
        "class": "Mage",
        "faction": "Order of the Arcane",
        "startingLocation": "Mystic Library",
        "funFact": "Can speak to animals"
      },
      {
        "name": "Thorn the Swift",
        "gender": "Unknown",
        "class": "Rogue",
        "faction": "Shadow Guild",
        "startingLocation": "Hidden Alley",
        "funFact": "Has a pet raven named Whisper"
      },
      {
        "name": "Eira the Fierce",
        "gender": "Female",
        "class": "Elf",
        "faction": "Forest Alliance",
        "startingLocation": "Enchanted Woods",
        "funFact": "Can communicate with trees"
      },
      {
        "name": "Darius the Mighty",
        "gender": "Male",
        "class": "Paladin",
        "faction": "Holy Crusaders",
        "startingLocation": "Sacred Cathedral",
        "funFact": "Wields a sword said to be blessed by the gods"
      },
      {
        "name": "Zara the Cunning",
        "gender": "Female",
        "class": "Assassin",
        "faction": "Night Stalkers",
        "startingLocation": "Rooftop Hideout",
        "funFact": "Never misses a target"
      },
      {
        "name": "Grom the Stout",
        "gender": "Male",
        "class": "Dwarf",
        "faction": "Mountain Clans",
        "startingLocation": "Ironforge",
        "funFact": "Has an extensive collection of rare gems"
      },
      {
        "name": "Sylva the Enchanting",
        "gender": "Female",
        "class": "Sorceress",
        "faction": "Mystic Coven",
        "startingLocation": "Crystal Tower",
        "funFact": "Can control the weather"
      },
      {
        "name": "Kane the Bold",
        "gender": "Male",
        "class": "Berserker",
        "faction": "Warrior Clans",
        "startingLocation": "Battlefield Camp",
        "funFact": "Fights with unmatched fury"
      },
      {
        "name": "Mira the Shadow",
        "gender": "Female",
        "class": "Ninja",
        "faction": "Silent Blades",
        "startingLocation": "Hidden Dojo",
        "funFact": "Moves without making a sound"
      }
    ];
  }
}
