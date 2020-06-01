import { Component, OnInit } from '@angular/core';
import { Album } from '../Album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums-feed',
  templateUrl: './albums-feed.component.html',
  styleUrls: ['./albums-feed.component.css']
})
export class AlbumsFeedComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAllAlbums()
    .subscribe(
      response => this.setAlbums(<[]>response),
      err => console.error('Albums got an error: ' + err),
      () => console.log('Albums got a complete notification')
    );
  }

  setAlbums(albums: []){
    this.albums = albums.slice(0, 10);
  }

}
