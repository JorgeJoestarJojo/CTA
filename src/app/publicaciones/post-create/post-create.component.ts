import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from './post.model';
import { mimeType } from './validador';

import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class postCreateComponent implements OnInit {

  
  enteredTitle = '';//cadena vacia
  enteredContent = '';
  form: FormGroup;
  imagePreview: string;
  private mode = 'create';
  private postId: string;
  post: Post;
  isLoading = false;


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }



  constructor(public postsService: PostService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      "title": new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]}),
        "content": new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]}),
          'image': new FormControl(null, {
            validators: [Validators.required],
          asyncValidators: [mimeType]})
    });
  
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = { id: postData._id, 
            title: postData.title, 
            content: postData.content,
            imagePath: postData.imagePath
          };
          this.form.setValue({
            title: this.post.title,
            content: this.post.content,
            image: this.post.imagePath
          });
        })
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    })
  }

  onImagePicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});//objeto de type scryp
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  
  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading=true;
    if (this.mode == "create") {
      this.postsService.addPost(
        this.form.value.title, 
        this.form.value.content, 
        this.form.value.image
        );
    } else {
      this.postsService.updatePost(
        this.postId,
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );
    }

    this.form.reset();
  }
}


