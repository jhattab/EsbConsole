import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JmsSyntheseComponent } from './jms-synthese.component';

describe('JmsSyntheseComponent', () => {
  let component: JmsSyntheseComponent;
  let fixture: ComponentFixture<JmsSyntheseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JmsSyntheseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JmsSyntheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
