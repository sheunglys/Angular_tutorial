import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronmanListComponent } from './ironman-list.component';

describe('IronmanListComponent', () => {
  let component: IronmanListComponent;
  let fixture: ComponentFixture<IronmanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronmanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronmanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
