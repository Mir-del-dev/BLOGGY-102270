import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import{NgForm} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit,AfterViewInit {

  Authors:any[]=[];
  postdate=new Date().toISOString();
  postId!:number;
  posts:any;
  @ViewChild('postForm',{static:true}) form!: NgForm;

  constructor( private router:Router, private http:HttpClient, private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getAuthor();
    this.postId =this.getIdfromUrl();
    this.getPostDetail();
  
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.form.setValue({
        postImage:this.posts.image_url,
        postTitle:this.posts.title,
        postautor: this.posts.author_id,
        postcontent:this.posts.content,
        postresume: this.posts.resume
          
        });  
   }, );
    
  }
  onSavePost( form:NgForm){
    const headers= {'Content-Type':'application/json','Accept':'*/*'};
    
    this.http.put<any>('http://102270.bloggy.ecole-it.devigne.space/posts/' + this.postId, {
    id:this.postId,
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
  
  getPostDetail(){
    
    this.http.get("http://102270.bloggy.ecole-it.devigne.space/posts/"+ this.postId).subscribe((data:any)=>{
      this.posts=data;
    }

 ) }
  getAuthor(){
    this.http.get("http://1022707d.bloggy.ecole-it.devigne.space/authors/").subscribe((data:any)=>{
      this.Authors=data;
    }
  )
  
   }
   getIdfromUrl():number{
    const post=  this.route.snapshot.paramMap.get('id');
    return Number(post);

  }
}
