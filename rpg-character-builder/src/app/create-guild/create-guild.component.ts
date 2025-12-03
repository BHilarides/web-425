import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="create-guild-container">
      <form [formGroup]="guildForm" class="create-guild-form" (ngSubmit)="createGuild(); guildForm.reset();">

      <h1>Create a New Guild</h1>
        <fieldset>
          <legend>Guild Creation Form</legend>

          <label>Guild Name</label>
          @for(guildName of guildNames; track guildName) {
            <input type="text" [value]="guildName" formControlName="guildName"> {{ guildName }} <br />
          }

          <label>Description</label>
          @for(description of descriptions; track description) {
            <textarea rows="5" [value]="description" formControlName="description"></textarea>
          }

          <label>Guild Type</label>
          <select formControlName="type">
            @for(option of guildTypeOptions; track option) {
              <option [value]="option">{{ option }}</option>
            }
          </select>

          <label>Accept Terms and Conditions</label>
          <input type="checkbox" formControlName="acceptTerms">

          <label>Notification Preferences</label>
          <div formArrayName="notificationPreferences">
            @for(preference of notificationPreferencesArray.controls; track preference; let i = $index) {
              <input type="checkbox" [formControlName]="i"> {{ notificationPreferences[i] }}
              <br />
            }
          </div>

          <input type="submit" [disabled]="!guildForm.valid" value="Create Guild">
        </fieldset>
      </form>

      <div class="created-guilds">
        <h1>Created Guilds</h1>
        <div class="guild-container">
          @for(guild of preexistingGuilds; track guild) {
            <div class="guild-card">
              <h2>Guild Name: {{ guild.guildName }}</h2>
              <h3>Description:</h3>
              <p>{{ guild.description }}</p>
              <h3>Type:</h3>
              <ul class="type-list">
                @for(type of guild.type; track type) {
                  <li>{{ type }}</li>
                }
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .create-guild-container {
      display: flex;
      flex-direction: column;
      width: 80%;
      align-items: center;
    }

    .create-guild-form, .created-guilds {
      width: 100%;
      margin-bottom: 20px;
    }

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


  `
})
export class CreateGuildComponent {

}
