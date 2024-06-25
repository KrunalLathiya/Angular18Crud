import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstGetComponent } from './gst-get.component';

describe('GstGetComponent', () => {
  let component: GstGetComponent;
  let fixture: ComponentFixture<GstGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GstGetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GstGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
