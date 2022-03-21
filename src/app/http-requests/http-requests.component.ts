import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Post } from './post.model';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css']
})
export class HttpRequestsComponent implements OnInit, OnDestroy {

  host = "https://first-angular-app-e38ad-default-rtdb.europe-west1.firebasedatabase.app/posts.json";

  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;
 
  constructor(private http: HttpClient, 
              private postService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })

    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.error;
  }  );
  }

  onCreatePost(postData: Post) {
    // Send Http request
   this.postService.createAndStorePost(postData.title, postData.content);

      
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.error;
      console.log(error);
    } );
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      if( confirm('Your confirmation will delete all existing posts. Would you like to preceed?') === true){
        this.loadedPosts = [];
      } else {return null};
     
      
    })
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

}
