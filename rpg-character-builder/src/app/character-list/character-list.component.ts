import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common'

import { Character } from '../create-character/create-character.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Your Character</h1>

    @if(character.characterName !== '') {
      <div class="character-card">
        <ul>
          <li><strong>Character ID:</strong> {{ character.characterId }}</li>
          <li><strong>Name:</strong> {{ character.characterName }}</li>
          <li><strong>Gender:</strong> {{ character.characterGender }}</li>
          <li><strong>Class:</strong> {{ character.characterClass }}</li>
        </ul>
      </div>
    } @else {
          <p>No character created yet.</p>
    }
  `,
  styles: [`
    li {
      margin-bottom: 10px;
      padding: 5px;
    }
  `]
})
export class CharacterListComponent {
  @Input() character!: Character;
}
