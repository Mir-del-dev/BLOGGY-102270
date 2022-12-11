import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent implements OnInit {

  posts: any[]=[];
  Authors:any[]=[];
  constructor(private http:HttpClient, private router:Router){}
  ViewPostDetail(postId:number){
    this.router.navigate(['post', postId]);
    

  }

  ngOnInit(): void {
    this.ChargePost();
    this.getAuthor();
  }
  ChargePost(){
    this.http.get("http://102270.bloggy.ecole-it.devigne.space/posts/").subscribe((data:any)=>{
      this.posts=data;
    }

 ) }
 getAuthor(){
  this.http.get("http://1022707d.bloggy.ecole-it.devigne.space/authors/").subscribe((data:any)=>{
    this.Authors=data;
  
  }
)

 }

}
