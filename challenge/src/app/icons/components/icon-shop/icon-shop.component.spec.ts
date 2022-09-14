import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconShopComponent } from './icon-shop.component';


describe('IconShopComponent', () => {
  let component: IconShopComponent;
  let fixture: ComponentFixture<IconShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
