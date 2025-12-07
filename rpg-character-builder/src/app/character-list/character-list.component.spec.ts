import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CahracterListComponent } from './cahracter-list.component';

describe('CahracterListComponent', () => {
  let component: CahracterListComponent;
  let fixture: ComponentFixture<CahracterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CahracterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CahracterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
