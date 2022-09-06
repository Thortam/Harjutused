import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NimedComponent } from './nimed.component';

describe('NimedComponent', () => {
  let component: NimedComponent;
  let fixture: ComponentFixture<NimedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NimedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
