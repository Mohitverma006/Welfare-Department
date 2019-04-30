import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuwaitComponent } from './kuwait.component';

describe('KuwaitComponent', () => {
  let component: KuwaitComponent;
  let fixture: ComponentFixture<KuwaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuwaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuwaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
