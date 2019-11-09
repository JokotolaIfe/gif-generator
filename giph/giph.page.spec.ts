import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphPage } from './giph.page';

describe('GiphPage', () => {
  let component: GiphPage;
  let fixture: ComponentFixture<GiphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
