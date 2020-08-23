import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../models/user';
import {Follow} from '../../models/follow';
import {UserService} from '../../services/user.service';
import {CommentService} from '../../services/comment.service';
import {FollowService} from '../../services/follow.service';
import {GLOBAL} from '../../services/global';
import {PublicationService} from '../../services/publication.service';
import {Publication} from '../../models/publication';

@Component({
  selector: 'publicationdetail',
  templateUrl: './publicationdetail.component.html',
  providers: [UserService, PublicationService,CommentService]
})
//this is component to display publication detail.
export class PublicationdetailComponent implements OnInit {
  public identity;
  public token;
  public title: string;
  public url: string;
  public status: string;
  public page;
  public total;
  public pages;
  public publication;
  public publication_id: string;
  public owner;
  public commentFlag:boolean;
  public comment:string;
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _publicationService: PublicationService,
    private _commentService:CommentService,
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this.publication_id = id;
    this.getPublication(this.publication_id);
    this.title = 'Publication Detail';
    this.url=GLOBAL.url;
    this.commentFlag=false;

    if(this.publication.user._id == this.identity._id){
      console.log("this is publickation",this.publication);
    };
  }

  getPublication(publication_id) {
    this._publicationService.getPublication(this.token, publication_id).subscribe(
      response => {
        this.publication = response.publication;
        this.owner = response.owner;
      }
    );
  }

  addComment(){
    this.commentFlag=!this.commentFlag;
    this._commentService.addComment(this.identity,this.comment);
  }
}
