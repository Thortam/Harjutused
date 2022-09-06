import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaComponent } from './muuda.component';

describe('MuudaComponent', () => {
  let component: MuudaComponent;
  let fixture: ComponentFixture<MuudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
