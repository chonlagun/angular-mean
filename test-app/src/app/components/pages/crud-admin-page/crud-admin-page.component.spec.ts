import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAdminPageComponent } from './crud-admin-page.component';

describe('CrudAdminPageComponent', () => {
  let component: CrudAdminPageComponent;
  let fixture: ComponentFixture<CrudAdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudAdminPageComponent]
    });
    fixture = TestBed.createComponent(CrudAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
