import {Injectable} from '@angular/core';
import {Post} from "../models/post.model";
import {catchError, map, Subject, tap, throwError} from "rxjs";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  baseUrl = 'https://localhost:8080/api/v1/';
  error = new Subject<any>();

  constructor(private http: HttpClient) { }


  onCreatePost(postData: Post) {
    // return this.http.post<Post>(
    //   this.baseUrl + 'posts.json', postData);

    // we can ask for more information such as response status (200, 201...) using 'observe'
    this.http.post<Post>(
      this.baseUrl + 'posts.json',
      postData,
      {
        observe: "response"
      })
      .subscribe({
        next: responseData => {
          console.log(responseData);
        },
        error: (err) => {
          // this will allow to pass error in any component
          this.error.next(err.message);
        }
      });
  }

  onFetchPosts() {
    // we can use a const and append values...
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('customValue', 'otherValue');

    // Send Http request
    return this.http.get<{[key: string]: Post}>(
      this.baseUrl + 'posts.json', {
        headers: new HttpHeaders({
          "custom-header": "SayHelllo",
          "Authorization": "someKindOfToken"
        }),
        // params: new HttpParams().set('print', 'pretty')
        params: searchParams
      })
      // note {[key: string] indicates the retrieved object received is a nested object containing a
      // key for which value is unknown (unlike 'title', or 'content' => value provided by firestore
      .pipe(
        map((responseData: {[key: string]: Post}) => {
          const  postArray: Post[] = [];
          for(const key in responseData)
          // we don't push the original object but a copy of it: we create new object.
          // the output object will have id, content and title
            if(responseData.hasOwnProperty(key))
              postArray.push({...responseData[key], id: key});
          // we return the transformed data
          return postArray;
        }),
        catchError(err => {
          console.log('Error intercepted in catch operator' + err.messages);
          return throwError(err);
        }));

  }

  onClearPosts() {
    // Send Http request
    return this.http.delete(
      this.baseUrl + 'posts.json',
      {
        observe: 'events',
        responseType: 'json'    // we can have blob, text...
      })
      // pipe. tap allows to execute code without altering the response
      .pipe(tap(event => {
        console.log('event on delete', event);
        // will return 4 as type for delete
        if(event.type === HttpEventType.Response) {
          console.log("HttpEventType.Response", HttpEventType.Response);
          console.log("Event.body", event.body)

        }
      }));
  }


}
