import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredCardComponent } from './sponsored-card.component';
import { MatCardModule } from '@angular/material/card';

describe('SponsoredCardComponent', () => {
  let component: SponsoredCardComponent;
  let fixture: ComponentFixture<SponsoredCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsoredCardComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsoredCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
