import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
postId!:number;
posts:any;
Authors:any[]=[];

  constructor(private route:ActivatedRoute, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.postId =this.getIdfromUrl();
    this.getPostDetail();
    this.getAuthor();
   
  }
  getIdfromUrl():number{
    const post=  this.route.snapshot.paramMap.get('id');
    return Number(post);
  }
  getPostDetail(){
    
      this.http.get("http://102270.bloggy.ecole-it.devigne.space/posts/"+ this.postId).subscribe((data:any)=>{
        this.posts=data;
        
      },((error:any)=>{ 
      this.router.navigate(['404'], {skipLocationChange:true});
 })

   ) }

   getAuthor(){
    this.http.get("http://1022707d.bloggy.ecole-it.devigne.space/authors/").subscribe((data:any)=>{
      this.Authors=data;
    
    }
  )
  
   }

  }
  



