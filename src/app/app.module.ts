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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule, 
    NgbModule                                                                                                                                                                                                  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
