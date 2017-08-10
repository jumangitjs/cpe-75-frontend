import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntriesComponent } from './admin-entries.component';

describe('AdminEntriesComponent', () => {
  let component: AdminEntriesComponent;
  let fixture: ComponentFixture<AdminEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
