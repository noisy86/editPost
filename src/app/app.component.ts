import { Component } from '@angular/core';

interface IBlogPost {
    title: string;
    body: string;
    showForm?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hwedit';

  showEdit="false";

  posts: IBlogPost[] = [
  {title: 'Ahoj', body: 'France', showForm: false},
  {title: 'Ahoj1', body: 'Paris', showForm: false},
];

  editTitle = "";
  editBody = "";

  editedPost: IBlogPost;
  save(): void {
    this.editedPost.title = this.editTitle;
    this.editedPost.body = this.editBody;
  }
}
