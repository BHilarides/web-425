import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { provideHttpClient } from '@angular/common/http';

import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should create', () => {
    const req = httpTestingController.expectOne('http://localhost:3000/api/character-factions');
    req.flush([]);

    expect(component).toBeTruthy();
  });

  it('should handle errors when data is not found', () => {
    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);
    req.flush('Faction not found', {
      status: 404,
      statusText: 'Not Found'
    });

    expect(component.errorMessage).toBeTruthy();
    expect(component.factions.length).toBe(0);
  });

  it('should correctly fetch a list of character factions', () => {
    const mockFactions = [
      {
        name: 'The Iron Brotherhood',
        description: 'The Iron Brotherhood is a faction of brave and honorable warriors. They value strength, courage, and loyalty above all else. Their members are known for their iron will and unbreakable spirit.'
      },
      {
        name: 'The Arcane Order',
        description: 'The Arcane Order is a faction of powerful mages. They seek knowledge and wisdom, and their magic is a tool to understand the mysteries of the universe. They are respected and feared for their magical prowess.',
      },
      {
        name: 'The Silent Knives',
        description: 'The Silent Knives is a faction of skilled rogues. They value stealth, cunning, and precision. Their members are masters of the shadows, using their skills for espionage and assassination.',
      },
      {
        name: 'The Nature\'s Guardians',
        description: 'The Nature\'s Guardians is a faction of druids and rangers. They are the protectors of the natural world, using their abilities to maintain the balance between civilization and nature.',
      },
    ];

    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);
    req.flush(mockFactions);

    expect(component.factions.length).toBe(4);
  });

  it('should update the characterFactions div when character factions are found', () => {
    const mockFactions = [
      {
        name: 'The Iron Brotherhood',
        description: 'The Iron Brotherhood is a faction of brave and honorable warriors. They value strength, courage, and loyalty above all else. Their members are known for their iron will and unbreakable spirit.'
      }
    ]

    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);
    req.flush(mockFactions);

    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(component.factions.length).toBeGreaterThan(0);
    expect(compiled.querySelector('.faction-card')).toBeTruthy();
    expect(compiled.textContent).toContain('The Iron Brotherhood');
  });
});
