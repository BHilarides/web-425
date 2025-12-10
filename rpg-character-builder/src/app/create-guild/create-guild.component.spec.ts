import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuildComponent } from './create-guild.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.guildForm.valid).toBeFalsy();
  });

  it('form should be valid when filled correctly', () => {
    component.guildForm.controls['guildName'].setValue('Test Guild');
    component.guildForm.controls['description'].setValue('This is a test guild.');
    component.guildForm.controls['type'].setValue('Casual');
    component.guildForm.controls['acceptTerms'].setValue(true);
    component.notificationPreferencesArray.at(0).setValue(true);

    fixture.detectChanges();

    expect(component.guildForm.valid).toBeTruthy();
    expect(component.hasSelectedNotification()).toBeTruthy();
  });

  it('should call createGuild on form submit with valid data', () => {
    spyOn(component, 'createGuild');

    component.guildForm.controls['guildName'].setValue('Test Guild');
    component.guildForm.controls['description'].setValue('This is a test guild.');
    component.guildForm.controls['type'].setValue('Casual');
    component.guildForm.controls['acceptTerms'].setValue(true);
    component.notificationPreferencesArray.at(0).setValue(true);

    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(component.createGuild).toHaveBeenCalled();
  });

  it('should emit guildUpdated event when guild is created', () => {
    spyOn(component.guildUpdated, 'emit');

    component.guildForm.controls['guildName'].setValue('Event Test Guild');
    component.guildForm.controls['description'].setValue('Testing events.');
    component.guildForm.controls['type'].setValue('Social');
    component.guildForm.controls['acceptTerms'].setValue(true);
    component.notificationPreferencesArray.at(2).setValue(true); // In-App

    component.createGuild();

    expect(component.guildUpdated.emit).toHaveBeenCalled();
    expect(component.guildUpdated.emit).toHaveBeenCalledWith(
      jasmine.objectContaining({
        guildName: 'Event Test Guild',
        description: 'Testing events.',
        type: 'Social',
        notificationPreferences: ['In-App']
      })
    );
  });
});
