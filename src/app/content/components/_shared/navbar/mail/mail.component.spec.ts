import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComponent } from './mail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

describe('MailComponent', () => {
  let component: MailComponent;
  let fixture: ComponentFixture<MailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailComponent ],
      imports: [ MatIconModule, MatMenuModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
