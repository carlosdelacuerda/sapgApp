import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredCardComponent } from './sponsored-card.component';

describe('SponsoredCardComponent', () => {
  let component: SponsoredCardComponent;
  let fixture: ComponentFixture<SponsoredCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsoredCardComponent ]
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
