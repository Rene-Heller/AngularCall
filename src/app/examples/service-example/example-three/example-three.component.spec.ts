import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleThreeComponent } from './example-three.component';

describe('ExampleThreeComponent', () => {
  let component: ExampleThreeComponent;
  let fixture: ComponentFixture<ExampleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
