import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="create-guild-container">
      <form [formGroup]="guildForm" class="create-guild-form" (ngSubmit)="createGuild()">

      <h1>Create a New Guild</h1>
        <fieldset>
          <legend>Guild Creation Form</legend>

          <label>Guild Name</label>
          <input type="text" formControlName="guildName">

          <label>Description</label>
          <textarea rows="5" formControlName="description"></textarea>

          <label>Guild Type</label>
          <select formControlName="type">
            @for(option of typeOptions; track option) {
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

          <input type="submit" [disabled]="!guildForm.valid || !hasSelectedNotification()" value="Create Guild">
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

    label {
      display: block;
      margin-bottom: 5px;
    }

    label:first-of-type {
      margin-top: 0;
    }

    label:not(:first-of-type) {
      margin-top: 10px;
    }

    input[type="text"] {
      width: 100%;
      display: block;
      margin-bottom: 5px;
      padding: 8px;
      box-sizing: border-box;
    }

    select {
      width: 20%;
      display: block;
      margin-bottom: 5px;
      padding: 8px;
      box-sizing: border-box;
    }

    textarea {
      width: 100%;
      margin-bottom: 5px;
      padding: 8px;
      box-sizing: border-box;
    }

    input[type="submit"] {
      display: block;
      padding: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
      float: right;
    }

    input[type="checkbox"], input[type="radio"] {
      box-sizing: border-box;
      margin-bottom: 10px;
    }

    fieldset {
      margin-bottom: 20px;
    }
  `
})
export class CreateGuildComponent {
  typeOptions: string[] = ['Casual', 'Competitive', 'Social', 'Educational'];
  notificationPreferences: string[] = ['Email', 'SMS', 'In-App', 'None'];
  preexistingGuilds: any;

  guildForm: FormGroup = this.fb.group({
    guildName: ['', Validators.compose([Validators.required])],
    description: ['', Validators.compose([Validators.required])],
    type: [null, Validators.compose([Validators.required])],
    acceptTerms: [false, Validators.compose([Validators.requiredTrue])],
    notificationPreferences: this.fb.array(this.notificationPreferences.map(() => false))
  })

  get notificationPreferencesArray() {
    return this.guildForm.get('notificationPreferences') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.preexistingGuilds = [
      {
        guildName: 'The Roving Bandits',
        description: 'Just a couple of friends having fun.',
        typeOptions: 'Casual',
        notificationPreference: ['Email']
      },
      {
        guildName: 'The Destroyers',
        description: 'We are hardcore. Take no Prisoners!',
        typeOptions: 'Competitive',
        notificationPreference: ['SMS']
      },
      {
        guildName: 'Princess Tea Party',
        description: 'This is our gossip time when the boys are gaming',
        typeOptions: 'Social',
        notificationPreference: ['In-App']
      },
      {
        guildName: 'Nerds with Weapons',
        description: 'This is fun and also social research for a project',
        typeOptions: 'Educational',
        notificationPreference: ['Email']
      },
      {
        guildName: 'Destroyers II',
        description: 'We split off from the Destroyers to form our own guild with no rules',
        typeOptions: 'Competitive',
        notificationPreference: ['SMS']

      },
      {
        guildName: 'Single Dads',
        description: 'We are a group of single dads looking to blow off steam',
        typeOptions: 'Casual',
        notificationPreference: ['None']

      }
    ];
  }

      // Double check notification
    hasSelectedNotification(): boolean {
      const vals: boolean[] = this.notificationPreferencesArray.value;
      return vals.some(v => v === true);
    }

  createGuild() {

    //Get the boolean values for each checkbox from the Form Array
    const selectedPreferencesValues = this.notificationPreferencesArray.value;

    const selectedPreferences = this.notificationPreferences.map((preference, index) => selectedPreferencesValues[index] ? preference : null).filter(preference => preference !== null)

    const newGuild = {
      guildName: this.guildForm.value.guildName,
      description: this.guildForm.value.description,
      type: this.guildForm.value.type,
      notificationPreferences: selectedPreferences
    };

    console.log('New Guild Created:', newGuild);
    this.preexistingGuilds.push(newGuild);
    alert("Guild created successfully!")

    this.guildForm.reset({
      guildName: '',
      description: '',
      type: null,
      acceptTerms: false
    });

    this.notificationPreferencesArray.controls.forEach(ctrl => ctrl.setValue(false));
  }
}
