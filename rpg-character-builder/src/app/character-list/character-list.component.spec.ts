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
      id: 999,
      name: 'Billy the Kid',
      gender: 'Male',
      class: 'Sharpshooter'
    };

    component.character = mockCharacter;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display character correctly', () => {
    const mockCharacter: Character = {
      id: 1000,
      name: 'Grandalf the Grey',
      gender: 'Male',
      class: 'Mage'
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
      id: 1001,
      name: '',
      gender: '',
      class: ''
    };

    component.character = mockCharacter;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('No character created yet.');
  });

  it('should display the character Id', () => {
    const mockCharacter: Character = {
      id: 1003,
      name: 'testCharacter',
      gender: 'Male',
      class: 'Warrior'
    };

    component.character = mockCharacter;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.textContent).toContain('1003');
  });
});
