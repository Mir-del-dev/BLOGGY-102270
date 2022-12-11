import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getpost',
  templateUrl: './getpost.component.html',
  styleUrls: ['./getpost.component.css']
})
export class GetpostComponent implements OnInit {
  posts:any[]=[];
  Authors:any[]=[];
  deletetitle!:string;
  deleteId!:number;

  constructor(private router:Router, private http:HttpClient,) { }

  ngOnInit(): void {
    this.ChargePost();
    this.getAuthor();
  }
AddPost(){
this.router.navigate(['Admin/create']);
}
EditPost( id:number){
  this.router.navigate(['Admin/edit',id]);

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
 confirmdeletePost(id:number,titre:string){
  this.deletetitle=titre;
  this.deleteId=id;
  
 }
deletePost(){
  this.http.delete("http://102270.bloggy.ecole-it.devigne.space/posts/" + this.deleteId).subscribe((data:any)=>{
document.getElementById('closepopup')?.click();
location.reload
  },
  (error:any)=>{
location.reload
this.ngOnInit()
  }
  )
document.getElementById('closepopup')?.click();
}

}
