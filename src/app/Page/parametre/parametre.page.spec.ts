import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParametrePage } from './parametre.page';

describe('ParametrePage', () => {
  let component: ParametrePage;
  let fixture: ComponentFixture<ParametrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
