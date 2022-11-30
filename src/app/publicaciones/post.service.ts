import { Post } from "./post-create/post.model";
import { Subject } from "rxjs";
import {map} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { identifierName } from "@angular/compiler";
import { response } from "express";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class PostService{
  private posts: Post[] = [];// primera matriz
  private postsUpdate = new Subject<Post[]>();

  constructor (private http: HttpClient, private router: Router){}

  getPosts(){
    //return [...this.posts]// segunda matriz (copia)
    this.http.get<{message:string, posts: any}>('http://localhost:3000/api.posts')
    .pipe(map((postData)=>{
    return postData.posts.map(post =>{
      return{
        title: post.title,
      content: post.content,
      id:post._id,
      imagePath: post.imagePath
      };
    });
    }))
    .subscribe((transformedPost) => {
      this.posts = transformedPost;
      this.postsUpdate.next([...this.posts])
    });
  }

  getPostsUpdateListener(){
    return this.postsUpdate.asObservable()
  }
  getPost(id: string){
    return this.http.get<{_id: string, title: string, content: string, imagePath: string}>
    ("http://localhost:3000/api.posts/" + id);
  }

  addPost(title: string, content: string, image: File){
    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", content);
    postData.append("image", image, title);
    this.http.post<{message: string, post: Post}>('http://localhost:3000/api.posts', postData)
    .subscribe((responseData) => {
      const post: Post ={
        id: responseData.post.id, 
        title: title, 
        content: content, 
        imagePath: responseData.post.imagePath
      };
      this.posts.push(post)
      this.postsUpdate.next([...this.posts])
      this.router.navigate(["/"]);
    });
    }

    updatePost(id: string, title: string, content: string, image: File | string){
      let postData: Post | FormData;
      if(typeof image === "object"){
        postData = new FormData();
        postData.append("id", id);
        postData.append("title", title);
        postData.append("content", content);
        postData.append("image", image,title);
      } else{
         postData ={
          id:id,
          title: title,
          content: content,
          imagePath: image
        };
      }
    this.http.put('http://localhost:3000/api.posts/' + id, postData)
    .subscribe(response => {
      const updatePost =[...this.posts];
      const oldPostIndex = updatePost.findIndex(p=> p.id === id);
      const post: Post = {
        id: id,
        title: title,
        content: content,
        imagePath: ""
      }
      updatePost[oldPostIndex] = post;
      this.posts = updatePost;
      this.postsUpdate.next([...this.posts]);
      this.router.navigate(["/"]);
    });
    }


    deletePost(postId: string){
      this.http.delete('http://localhost:3000/api.posts/' + postId)
      .subscribe(()=>{
        const updatePost = this.posts.filter(post => post.id !==postId);
        this.posts = updatePost;
        this.postsUpdate.next([...this.posts]);
      });
    }

}



