import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';
import { Photo } from '../Photo';
import { Comment } from '../Comment';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photoId: string;
  photo: Photo;

  comment: string;
  allComments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.photoId = params.get('id');
      this.loadPhoto(this.photoId);
      this.loadAllComments(this.photoId);
    });
  }

  loadPhoto(photoId: string){
    this.photoService.getPhoto(photoId)
    .subscribe(
      response => this.photo = <Photo>response,
      err => console.error('Album-Photos got an error: ' + err),
      () => console.log('Album-Photos got a complete notification')
    );
  }

  loadAllComments(photoId: string){
    this.comment = "";

    this.photoService.getAllComments(photoId)
    .subscribe(
      response => this.sortAndAssignComments(<Comment[]>response),
      err => console.error('Photo comments got an error: ' + err),
      () => console.log('Photo comments got a complete notification')
    );
  }

  sortAndAssignComments(comments: Comment[]){
    this.allComments = comments.reverse();
  }

  makeComment(){
    this.photoService.saveComment(this.photoId, this.comment)
    .subscribe(
      response => this.loadAllComments(this.photoId),
      err => console.error('Photo comments got an error: ' + err),
      () => console.log('Photo comments got a complete notification')
    );
  }



}
