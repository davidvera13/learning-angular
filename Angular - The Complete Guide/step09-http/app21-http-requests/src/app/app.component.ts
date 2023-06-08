import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Subscription} from "rxjs";
import {Post} from "./models/post.model";
import {HttpClientService} from "./services/http-client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app21-http-requests';
  loadedPosts: Post[] = [];
  baseUrl = 'https://localhost:8080/api/v1/';
  isFetching = false;
  error = null;
  private errorSub: Subscription = new Subscription();

  constructor(private http: HttpClient, private clientService: HttpClientService) {
  }

  ngOnInit() {
    this.fetchPosts();
    this.errorSub = this.clientService
      .error
      .subscribe(err => this.error = err.message );
  }

  onCreatePost(postData: Post) {
  // onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    // firebase requires to add json at the end of the request
    this.clientService.onCreatePost(postData);

      // .subscribe(responseData => {
      //   console.log(responseData);
      //   this.clientService.onFetchPosts()
      //     .subscribe((posts: Post[]) => {
      //       console.log(posts);
      //       this.loadedPosts = posts;
      //       this.isFetching = false;
      //     });
      // });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.clientService.onClearPosts()
      .subscribe(response => console.log(response));
    this.clientService.onFetchPosts()
      .subscribe({
        next: (posts: Post[]) => {
          console.log(posts);
          this.loadedPosts = posts;
          this.isFetching = false;
        },
        error: (err) => {
          this.isFetching = false;
          this.error = err.message;
        }
      });
  }

  private fetchPosts() {
    this.isFetching = true;
    this.clientService.onFetchPosts()
      .subscribe({
        next: (posts: Post[]) => {
          console.log(posts);
          this.loadedPosts = posts;
          setTimeout(() => this.isFetching = false, 1000)
        },
        error: (err) => {
          this.isFetching = false;
          this.error = err.message;
        }
      });
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  onHandleError() {
    this.error = null;
  }
}
