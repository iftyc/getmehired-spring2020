import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsFeedComponent } from './albums-feed.component';

describe('AlbumsFeedComponent', () => {
  let component: AlbumsFeedComponent;
  let fixture: ComponentFixture<AlbumsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
