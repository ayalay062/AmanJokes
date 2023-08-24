import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJokeModalComponent } from './view-joke-modal.component';

describe('ViewJokeModalComponent', () => {
  let component: ViewJokeModalComponent;
  let fixture: ComponentFixture<ViewJokeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJokeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJokeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
