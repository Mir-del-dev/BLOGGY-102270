import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
postdate=new Date().toISOString();
Authors:any[]=[];

  constructor( private router:Router, private http:HttpClient ) { 
    
  }

  ngOnInit(): void {
  this.getAuthor();
    
  }
  
  onSavePost(form:NgForm){
    
    const headers= {'Content-Type':'application/json','Accept':'*/*'};
    
    this.http.post<any>('http://102270.bloggy.ecole-it.devigne.space/posts/', {
    id:1,
    title:form.value.postTitle,
    resume: form.value.postresume,
    content:form.value.postcontent,
    create_ad:this.postdate,
    image_url:form.value.postImage,
    author_id:form.value.postautor
  }, {headers}).subscribe((data:any)=>{
    
  this.router.navigate(['Admin/get']);
    
    }
  )
  
  }
  getAuthor(){
    this.http.get("http://1022707d.bloggy.ecole-it.devigne.space/authors/").subscribe((data:any)=>{
      this.Authors=data;
    }
  )
  
   }
}
