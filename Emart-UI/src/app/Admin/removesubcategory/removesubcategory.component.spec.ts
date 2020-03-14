import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovesubcategoryComponent } from './removesubcategory.component';

describe('RemovesubcategoryComponent', () => {
  let component: RemovesubcategoryComponent;
  let fixture: ComponentFixture<RemovesubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovesubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovesubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
