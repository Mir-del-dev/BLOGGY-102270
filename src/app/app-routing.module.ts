import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepostComponent } from './Administration/createpost/createpost.component';
import { EditpostComponent } from './Administration/editpost/editpost.component';
import { GetpostComponent } from './Administration/getpost/getpost.component';
import { AppComponent } from './app.component';
import { HompageComponent } from './hompage/hompage.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  {path:"",component:HompageComponent},
  {path:'posts',component:HompageComponent},
  {path:'post/:id',component:ViewPostComponent},
  {path:'Admin/create', component:CreatepostComponent},
  {path:'Admin/edit/:id', component:EditpostComponent},
  {path:'Admin/get',component:GetpostComponent},
  {path:'404',component:NotFoundPageComponent},
  {path:'**',component:NotFoundPageComponent }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
