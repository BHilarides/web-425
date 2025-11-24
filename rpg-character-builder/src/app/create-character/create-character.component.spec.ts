import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    const characterId = component.newCharacterId(); // This will trigger the generation of a new character ID
    expect(characterId).toBeGreaterThan(0);
    expect(characterId).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(characterId)).toBe(true);
  });

  it('should add a character with correct customization', () => {
    component.characterName = 'Forcynthia';
    component.characterGender = 'female';
    component.characterClass = 'rogue';

    component.createCharacter();

    const createdCharacter = component.character;
    expect(createdCharacter.name).toBe('Forcynthia')
    expect(createdCharacter.gender).toBe('female')
    expect(createdCharacter.class).toBe('rogue')
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    component.characterName = 'Forcynthia';
    component.characterGender = 'female';
    component.characterClass = 'rogue';

    component.resetForm();

    expect(component.characterName).toBe('');
    expect(component.characterGender).toBe('Male');
    expect(component.characterClass).toBe('Warrior');
  })
});
