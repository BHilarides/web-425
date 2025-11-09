import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
  * Hands On 3.1
  */

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create correctly display a list of characters', () => {
    fixture.detectChanges() // Triggers rendering
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const Players = compiled.querySelectorAll('.player-item'); // Get all players
    expect(Players.length).toEqual(component.players.length); // Check if number of players is equal to number of players in list
  });

});
