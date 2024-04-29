import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverydayComponent } from './dictionary.component';

describe('EverydayComponent', () => {
  let component: DictionaryComponent;
  let fixture: ComponentFixture<DictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DictionaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
