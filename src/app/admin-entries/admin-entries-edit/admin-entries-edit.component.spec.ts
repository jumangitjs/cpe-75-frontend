import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntriesEditComponent } from './admin-entries-edit.component';

describe('AdminEntriesEditComponent', () => {
  let component: AdminEntriesEditComponent;
  let fixture: ComponentFixture<AdminEntriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEntriesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEntriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
