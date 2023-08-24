import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwopartJokeComponent } from './twopart-joke.component';

describe('TwopartJokeComponent', () => {
  let component: TwopartJokeComponent;
  let fixture: ComponentFixture<TwopartJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwopartJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwopartJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
