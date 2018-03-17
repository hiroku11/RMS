import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishEmailComponent } from './publish-email.component';

describe('PublishEmailComponent', () => {
  let component: PublishEmailComponent;
  let fixture: ComponentFixture<PublishEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
