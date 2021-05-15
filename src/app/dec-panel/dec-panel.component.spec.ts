import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecPanelComponent } from './dec-panel.component';

describe('DecPanelComponent', () => {
  let component: DecPanelComponent;
  let fixture: ComponentFixture<DecPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
