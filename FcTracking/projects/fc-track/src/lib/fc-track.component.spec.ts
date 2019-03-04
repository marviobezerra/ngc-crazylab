import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcTrackComponent } from './fc-track.component';

describe('FcTrackComponent', () => {
  let component: FcTrackComponent;
  let fixture: ComponentFixture<FcTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
