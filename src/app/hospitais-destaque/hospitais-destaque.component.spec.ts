import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaisDestaqueComponent } from './hospitais-destaque.component';

describe('HospitaisDestaqueComponent', () => {
  let component: HospitaisDestaqueComponent;
  let fixture: ComponentFixture<HospitaisDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitaisDestaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitaisDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
