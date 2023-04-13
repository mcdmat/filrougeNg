import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuPageComponent } from './admin-menu-page.component';

describe('AdminMenuPageComponent', () => {
  let component: AdminMenuPageComponent;
  let fixture: ComponentFixture<AdminMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMenuPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
