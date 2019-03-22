import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTaggerViewComponent } from './text-tagger-view.component';

describe('TextTaggerViewComponent', () => {
  let component: TextTaggerViewComponent;
  let fixture: ComponentFixture<TextTaggerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextTaggerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTaggerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
