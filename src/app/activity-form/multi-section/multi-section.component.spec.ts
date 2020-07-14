import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSectionComponent } from './multi-section.component';

describe('MultiSectionComponent', () => {
  let component: MultiSectionComponent;
  let fixture: ComponentFixture<MultiSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
