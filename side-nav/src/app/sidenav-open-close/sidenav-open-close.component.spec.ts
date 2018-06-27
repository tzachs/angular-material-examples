import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavOpenCloseComponent } from './sidenav-open-close.component';

describe('SidenavOpenCloseComponent', () => {
  let component: SidenavOpenCloseComponent;
  let fixture: ComponentFixture<SidenavOpenCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavOpenCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavOpenCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
