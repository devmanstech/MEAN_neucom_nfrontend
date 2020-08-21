import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message } from '../../../../models/message';
import { MessageService } from '../../../../services/message.service';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { Follow } from '../../../../models/follow';
import { FollowService } from '../../../../services/follow.service' ;
import { GLOBAL } from '../../../../services/global';
import { Subscriber } from 'rxjs';


@Component({
    selector: 'sended',
    templateUrl: './sended.component.html',
    providers: [FollowService, MessageService]
})
export class SendedComponent implements OnInit{
    public title: string;
    public identity;
    public token;
    public url: string;
    public messages: Message[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _followService: FollowService,
        private _messageService: MessageService,
        private _userService: UserService
    ){
        this.title = 'Mensaje Enviado';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
    }
    ngOnInit(){
        console.log('sended.component cargado');
        this.getMessages();
    }

    getMessages(){
        this._messageService.getEmmitMessages(this.token,1).subscribe(
            response => {
                if(response.message){
                    this.messages = response.messages;
                }
            },
            error => {
                console.log(<any> error);
            }
        );
    }
}