import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodsComponent } from './edit-foods.component';

describe('EditFoodsComponent', () => {
  let component: EditFoodsComponent;
  let fixture: ComponentFixture<EditFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
