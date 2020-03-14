import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerviewprofileComponent } from './buyerviewprofile.component';

describe('BuyerviewprofileComponent', () => {
  let component: BuyerviewprofileComponent;
  let fixture: ComponentFixture<BuyerviewprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerviewprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
