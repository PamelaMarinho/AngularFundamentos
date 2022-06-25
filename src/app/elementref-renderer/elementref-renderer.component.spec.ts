import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementrefRendererComponent } from './elementref-renderer.component';

describe('ElementrefRendererComponent', () => {
  let component: ElementrefRendererComponent;
  let fixture: ComponentFixture<ElementrefRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementrefRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementrefRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
