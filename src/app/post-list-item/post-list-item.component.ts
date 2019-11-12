import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: Number;
  @Input() postDate: Date;
 
  constructor() { }

  ngOnInit() {
  }

  getTitle(){
    return this.postTitle;
  }

  onLoveIt(loveIts:number){
    console.log("one like added"); 
    console.log(loveIts)
    return this.postLoveIts=loveIts+1
    
  }
  
  onLoveItNot(loveIts:number){
    console.log("removed")
    console.log(loveIts)
    return this.postLoveIts=loveIts-1
  }

 


}
