import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuwaitapplicantListComponent } from './kuwaitapplicant-list.component';

describe('KuwaitapplicantListComponent', () => {
  let component: KuwaitapplicantListComponent;
  let fixture: ComponentFixture<KuwaitapplicantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuwaitapplicantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuwaitapplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
