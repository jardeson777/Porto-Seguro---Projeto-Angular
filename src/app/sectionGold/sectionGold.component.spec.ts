/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectionGoldComponent } from './sectionGold.component';

describe('SectionGoldComponent', () => {
  let component: SectionGoldComponent;
  let fixture: ComponentFixture<SectionGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
