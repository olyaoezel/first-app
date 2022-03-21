import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from '../http-requests/post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
    host = "https://first-angular-app-e38ad-default-rtdb.europe-west1.firebasedatabase.app/posts.json";

    error = new Subject<string>();

  constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string){
        const postData: Post = {title: title, content: content};

        this.http
        .post<{name: string}>( // <{name: string}> optional, but helpful 
          this.host,
            postData, {
              observe: 'response'
          }
        )
        .subscribe(responseData => {
          console.log(responseData.body);
        }, error => {
            this.error.next(error.message);
        });
    }

    fetchPosts() {
        // let searchParams = new HttpParams();
        // searchParams = searchParams.append('print', 'pretty');

    return  this.http.get<{[key: string]:Post}>(
        this.host, {
            headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
            params: new HttpParams().set('print', 'pretty') //can be replaced params: searchParams
            }).
            pipe(map((responseData: {[key: string]: Post}) => {
              const postsArray: Post[] = [];
            for(const key in responseData) {
              if(responseData.hasOwnProperty(key))
              postsArray.push({...responseData[key], id: key});
            }
          return postsArray;
            }),
                catchError(errorRes => {
                    //send to analytics server
                    return throwError(errorRes);
                })
        );
    }

    deletePosts(){
        return this.http.delete(this.host, {
           observe: 'events', // possibly options: body, response instead of 'events'
            responseType: 'json' // 'text', 'blob'
         })
            .pipe(tap(event => {
                // console.log(event);
                if (event.type === HttpEventType.Sent) {
                    //...
                }
                if (event.type === HttpEventType.Response) {
                    // console.log(event.body);
                }
            })
        );
    }
}