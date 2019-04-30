import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudiArabiaComponent } from './saudi-arabia.component';

describe('SaudiArabiaComponent', () => {
  let component: SaudiArabiaComponent;
  let fixture: ComponentFixture<SaudiArabiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudiArabiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudiArabiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
