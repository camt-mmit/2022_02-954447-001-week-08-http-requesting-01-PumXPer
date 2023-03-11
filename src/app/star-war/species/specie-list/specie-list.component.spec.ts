import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieListComponent } from './specie-list.component';

describe('SpecieListComponent', () => {
  let component: SpecieListComponent;
  let fixture: ComponentFixture<SpecieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SpecieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
