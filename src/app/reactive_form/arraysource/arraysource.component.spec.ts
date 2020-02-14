import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysourceComponent } from './arraysource.component';

describe('ArraysourceComponent', () => {
  let component: ArraysourceComponent;
  let fixture: ComponentFixture<ArraysourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraysourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraysourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
