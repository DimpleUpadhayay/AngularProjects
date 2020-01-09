import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
//import { SidebarComponent } from './sidebar/sidebar.component';
import { PublicComponent } from './public/public.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildhomeComponent } from './childhome/childhome.component';
import { CommunityComponent } from './community/community.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TopquestionsComponent } from './topquestions/topquestions.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuetioncardarrService } from './quetioncardarr.service';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';



//import { NgbdCollapseBasic } from './collapse-basic';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    //SidebarComponent,
    PublicComponent,
    DashboardComponent,
    ChildhomeComponent,
    CommunityComponent,
    TopquestionsComponent,
    QuestionDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule, 
    NgbModule,
    QuillModule.forRoot()
                                                                                                                                                                                      
  ],
  providers: [QuetioncardarrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
