import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Album } from './Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  idToken = localStorage.getItem('idToken');

  constructor(private http: HttpClient) { }

  createAlbum(albumTitle: string, fileId: string){

    var album: Album = {
      'id': "",
      'title': albumTitle,
      'coverPhotoUrl': environment.API_BASE_URL + "files/show/"+fileId,
      'creationDate': "",
      'createdBy': "",
    };
    
    var headers = this.getHeader();
    return this.http.post(environment.API_BASE_URL + "albums", album, {headers});
  }

  getAllAlbums(){
    var headers = this.getHeader();
    return this.http.get(environment.API_BASE_URL + "albums/all", {headers});
  }

  getMyAlbums(){
    var headers = this.getHeader();
    return this.http.get(environment.API_BASE_URL + "albums", {headers});
  }

  getPhotosForAlbum(albumId: string){
    var headers = this.getHeader();
    return this.http.get(environment.API_BASE_URL + "albums/"+albumId+"/photos", {headers});
  }

  makeAlbumCover(photoUrl: string, albumId: string){
    var headers = this.getHeader();
    
    const params = new HttpParams()
    .set('photoUrl', photoUrl)
    .set('id', albumId);

    return this.http.put(environment.API_BASE_URL + "albums/coverPhoto", params, {headers});
  }

  getHeader(){
    var headers = {
      'idToken': this.idToken
    };

    return headers;
  }
}
