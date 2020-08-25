import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';

@Injectable()

export class CommentService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addComment(token, Comment): Observable<any> {
    let params = JSON.stringify(Comment);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', token);
    return this._http.post(this.url + 'comment', params, {headers: headers});
  }
  updateComment(token,param):Observable<any>{
    let params = JSON.stringify(param);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', token);
    return this._http.put(this.url + 'comment', params, {headers: headers});
  }

  deleteComment(token,id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', token);
    return this._http.delete(this.url + 'comment/'+id, {headers: headers});
  }
  getComments(token,publication):Observable<any>{
    let params = JSON.stringify(publication);
    console.log(params)
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
    return this._http.post(this.url + 'get-comments', params, {headers: headers});
  }
}

