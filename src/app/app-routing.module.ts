import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
///import { SidebarComponent} from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildhomeComponent } from './childhome/childhome.component';
import { PublicComponent } from './public/public.component';
import { TopquestionsComponent } from './topquestions/topquestions.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { PublicDetailsComponent } from './public-details/public-details.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'topquestions', component: TopquestionsComponent },
      { path: 'questiondetails/:id', component: QuestionDetailsComponent },
      { path: 'public', component: PublicComponent },
      { path: 'publicdetails/:id', component: PublicDetailsComponent },
      { path: '', redirectTo: 'topquestions', pathMatch: 'full' },
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
