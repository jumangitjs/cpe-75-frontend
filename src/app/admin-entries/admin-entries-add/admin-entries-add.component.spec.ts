import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntriesAddComponent } from './admin-entries-add.component';

describe('AdminEntriesAddComponent', () => {
  let component: AdminEntriesAddComponent;
  let fixture: ComponentFixture<AdminEntriesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEntriesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEntriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
