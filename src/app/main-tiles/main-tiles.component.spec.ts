import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTilesComponent } from './main-tiles.component';

describe('MainTilesComponent', () => {
  let component: MainTilesComponent;
  let fixture: ComponentFixture<MainTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
