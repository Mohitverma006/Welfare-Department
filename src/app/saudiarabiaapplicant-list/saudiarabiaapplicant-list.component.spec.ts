import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudiarabiaapplicantListComponent } from './saudiarabiaapplicant-list.component';

describe('SaudiarabiaapplicantListComponent', () => {
  let component: SaudiarabiaapplicantListComponent;
  let fixture: ComponentFixture<SaudiarabiaapplicantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudiarabiaapplicantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudiarabiaapplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
