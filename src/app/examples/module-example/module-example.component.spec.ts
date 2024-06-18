import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleExampleComponent } from './module-example.component';

describe('ModuleExampleComponent', () => {
  let component: ModuleExampleComponent;
  let fixture: ComponentFixture<ModuleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
