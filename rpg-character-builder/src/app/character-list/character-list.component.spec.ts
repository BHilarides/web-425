import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';

import { CommonModule } from '@angular/common';

import { Character } from '../create-character/create-character.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;

    const mockCharacter: Character = {
      characterId: 999,
      characterName: 'Billy the Kid',
      characterGender: 'Male',
      characterClass: 'Sharpshooter'
    };

    component.character = mockCharacter;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display character correctly', () => {
    const mockCharacter: Character = {
      characterId: 1000,
      characterName: 'Grandalf the Grey',
      characterGender: 'Male',
      characterClass: 'Mage'
    };

    component.character = mockCharacter;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.textContent).toContain('1000');
    expect(compiled.textContent).toContain('Grandalf the Grey');
    expect(compiled.textContent).toContain('Male');
    expect(compiled.textContent).toContain('Mage');
  });

  it('should display a message for an empty character', () => {
    const mockCharacter: Character = {
      characterId: 1001,
      characterName: '',
      characterGender: '',
      characterClass: ''
    };

    component.character = mockCharacter;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('No character created yet.');
  });

  it('should display the character Id', () => {
    const mockCharacter: Character = {
      characterId: 1003,
      characterName: 'testCharacter',
      characterGender: 'Male',
      characterClass: 'Warrior'
    };

    component.character = mockCharacter;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.textContent).toContain('1003');
  });
});
