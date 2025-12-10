import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildListComponent } from './guild-list.component';

import { CommonModule } from '@angular/common';

import { Guild } from '../create-guild/create-guild.component';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;

    const mockGuilds: Guild[] = [
      {
        guildName: 'Test Guild',
        description: 'A test guild',
        type: 'Casual',
        notificationPreferences: ['Email']
      }
    ];

    component.guilds = mockGuilds;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display guilds correctly', () => {
    const mockGuilds: Guild[] = [
      {
        guildName: 'Warriors',
        description: 'For the strongest warriors',
        type: 'Competitive',
        notificationPreferences: ['SMS', 'Email']
      }
    ];

    component.guilds = mockGuilds;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.textContent).toContain('Warriors');
    expect(compiled.textContent).toContain('For the strongest warriors');
    expect(compiled.textContent).toContain('Competitive');
    expect(compiled.textContent).toContain('SMS');
    expect(compiled.textContent).toContain('Email');
  });

  it('should display a message for no guilds', () => {
    component.guilds = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('No guilds created yet.');
  });

  it('should display multiple guilds', () => {
    const mockGuilds: Guild[] = [
      {
        guildName: 'Guild 1',
        description: 'First',
        type: 'Social',
        notificationPreferences: ['Email']
      },
      {
        guildName: 'Guild 2',
        description: 'Second',
        type: 'Social',
        notificationPreferences: ['SMS']
      }
    ];

    component.guilds = mockGuilds;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const guildCards = compiled.querySelectorAll('.guild-card');
    expect(guildCards.length).toBe(2);
    expect(compiled.textContent).toContain('Guild 1');
    expect(compiled.textContent).toContain('Guild 2');
  });
});
