import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JordanapplicantListComponent } from './jordanapplicant-list.component';

describe('JordanapplicantListComponent', () => {
  let component: JordanapplicantListComponent;
  let fixture: ComponentFixture<JordanapplicantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JordanapplicantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JordanapplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
