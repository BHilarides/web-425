export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="character-form-container">
      <form class="character-form" #characterForm="ngForm" (ngSubmit)="createCharacter();">
      <h1>Create Your Character</h1>
        <fieldset>
          <legend>Character Details</legend>

          <label for="characterName">Character Name</label>
          <input type="text" id="characterName" name="characterName" [(ngModel)]="characterName" ngModel>

          <label for="characterGender">Gender</label>
          <select name="characterGender" id="characterGender" [(ngModel)]="characterGender" ngModel>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

        <label for="characterClass">Class</label>
        <select name="characterClass" id="characterClass" [(ngModel)]="characterClass" ngModel>
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
        </select>

        <input type="submit" value="Create Character" />
      </fieldset>
    </form>

  </div>
`,
styles: [`
    .character-form-container {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    .character-form {
      flex: 1;
      margin-right: 20px;
    }

    .character-summary {
      flex: 1;
    }

    fieldset {
      margin-bottom: 20px;
    }

    label, select, input[type="text"] {
      display: block;
      margin-bottom: 5px;
    }

    input[type="text"], select, input[type="submit"] {
      padding: 8px;
      box-sizing: border box;
    }

    input[type="text"], select {
      width: 100%
    }

    input[type="submit"] {
      float: right;
    }

    .character-card {
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .character-card p {
      margin: 10px 0;
    }
  `]
})
export class CreateCharacterComponent {
  character: Character;
  characterName: string;
  characterGender: string;
  characterClass: string;

  constructor() {
    this.character = {
      id: 0,
      name: '',
      gender: '',
      class: '',
    };

    this.characterName = '';
    this.characterGender = 'Male',
    this.characterClass = 'Warrior';
  }

  newCharacterId(): number {
    return Math.floor(Math.random() * 1000) +1;
  }

  createCharacter() {
    this.character = {
      id: this.newCharacterId(),
      name: this.characterName,
      gender: this.characterGender,
      class: this.characterClass
    };

    console.log('Character created:', this.character);
    this.resetForm();
  }

  resetForm() {
    this.characterName = '';
    this.characterGender = 'Male';
    this.characterClass = 'Warrior';
  }
}
