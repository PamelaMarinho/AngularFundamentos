import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IoPropertiesComponent } from './io-properties.component';

describe('IoPropertiesComponent', () => {
  let component: IoPropertiesComponent;
  let fixture: ComponentFixture<IoPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IoPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IoPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
