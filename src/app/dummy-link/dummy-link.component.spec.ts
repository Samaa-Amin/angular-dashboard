import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyLinkComponent } from './dummy-link.component';

describe('DummyLinkComponent', () => {
  let component: DummyLinkComponent;
  let fixture: ComponentFixture<DummyLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
