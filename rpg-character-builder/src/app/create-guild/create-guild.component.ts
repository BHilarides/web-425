export interface Guild {
  guildName: string;
  description: string;
  type: string;
  notificationPreferences: string[];
}

import { CommonModule } from '@angular/common';

import { Component, EventEmitter, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

import { GuildListComponent } from '../guild-list/guild-list.component'

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GuildListComponent],
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

      <div class="guild-list-section">
        <app-guild-list [guilds]="preexistingGuilds"></app-guild-list>
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

    .create-guild-form, .guild-list-section {
      width: 100%;
      margin-bottom: 20px;
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
  preexistingGuilds: Guild[] = [];

  @Output() guildUpdated = new EventEmitter<Guild>();

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
        type: 'Casual',
        notificationPreferences: ['Email']
      },
      {
        guildName: 'The Destroyers',
        description: 'We are hardcore. Take no Prisoners!',
        type: 'Competitive',
        notificationPreferences: ['SMS']
      },
      {
        guildName: 'Princess Tea Party',
        description: 'This is our gossip time when the boys are gaming',
        type: 'Social',
        notificationPreferences: ['In-App']
      },
      {
        guildName: 'Nerds with Weapons',
        description: 'This is fun and also social research for a project',
        type: 'Educational',
        notificationPreferences: ['Email']
      },
      {
        guildName: 'Destroyers II',
        description: 'We split off from the Destroyers to form our own guild with no rules',
        type: 'Competitive',
        notificationPreferences: ['SMS']

      },
      {
        guildName: 'Single Dads',
        description: 'We are a group of single dads looking to blow off steam',
        type: 'Casual',
        notificationPreferences: ['None']
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

    const newGuild: Guild = {
      guildName: this.guildForm.value.guildName,
      description: this.guildForm.value.description,
      type: this.guildForm.value.type,
      notificationPreferences: selectedPreferences as string[]
    };

    console.log('New Guild Created:', newGuild);
    this.preexistingGuilds.push(newGuild);
    this.guildUpdated.emit(newGuild);
    alert("Guild created successfully!");

    this.guildForm.reset({
      guildName: '',
      description: '',
      type: null,
      acceptTerms: false
    });

    this.notificationPreferencesArray.controls.forEach(ctrl => ctrl.setValue(false));
  }
}
