import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovecategoryComponent } from './removecategory.component';

describe('RemovecategoryComponent', () => {
  let component: RemovecategoryComponent;
  let fixture: ComponentFixture<RemovecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
