import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseconcernMessageComponent } from './raiseconcern-message.component';

describe('RaiseconcernMessageComponent', () => {
  let component: RaiseconcernMessageComponent;
  let fixture: ComponentFixture<RaiseconcernMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseconcernMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseconcernMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
