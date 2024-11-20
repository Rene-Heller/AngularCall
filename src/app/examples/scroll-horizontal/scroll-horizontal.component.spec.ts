import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollHorizontalComponent } from './scroll-horizontal.component';

describe('ScrollHorizontalComponent', () => {
  let component: ScrollHorizontalComponent;
  let fixture: ComponentFixture<ScrollHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollHorizontalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
