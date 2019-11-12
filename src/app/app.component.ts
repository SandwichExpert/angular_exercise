import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  date = new Date();

  posts =[
    {
      title:'Mon premier post',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      loveIts:0,
      created_at: this.date
  },
  {
    title:'Mon deuxième post',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    loveIts:0,
    created_at: this.date
  },
  {
    title:'Mon troisième post',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    loveIts:0,
    created_at: this.date
  }
]

// onLoveIt(){
//   console.log("one like added");  
// }

// onLoveItNot(){
//   console.log("one like added");  
// }



}
