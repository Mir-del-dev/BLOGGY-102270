import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { CreatepostComponent } from './Administration/createpost/createpost.component';
import { EditpostComponent } from './Administration/editpost/editpost.component';
import { GetpostComponent } from './Administration/getpost/getpost.component';
import { HompageComponent } from './hompage/hompage.component';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewPostComponent,
    CreatepostComponent,
    EditpostComponent,
    GetpostComponent,
    HompageComponent,
    NotFoundPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
