import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermenuComponent } from './usermenu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

describe('UsermenuComponent', () => {
  let component: UsermenuComponent;
  let fixture: ComponentFixture<UsermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermenuComponent ],
      imports: [ MatIconModule, MatMenuModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
