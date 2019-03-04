import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcVisionComponent } from './fc-vision.component';

describe('FcVisionComponent', () => {
  let component: FcVisionComponent;
  let fixture: ComponentFixture<FcVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
