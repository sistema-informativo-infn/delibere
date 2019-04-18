import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliberaFiltersComponent } from './delibera-filters.component';

describe('DeliberaFiltersComponent', () => {
  let component: DeliberaFiltersComponent;
  let fixture: ComponentFixture<DeliberaFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliberaFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliberaFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
