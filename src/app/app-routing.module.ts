import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { SignupComponent} from './signup/signup.component';
import { LoginComponent} from './login/login.component';
///import { SidebarComponent} from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildhomeComponent } from './childhome/childhome.component';
import { PublicComponent } from './public/public.component';


const routes: Routes = [

{path : 'home', component : HomeComponent},
{path : 'signup', component : SignupComponent},
{path : 'login', component : LoginComponent },
{path  : 'dashboard',component : DashboardComponent,
children: [
  {path  : 'dashboard',component : HomeComponent},
  {path  : 'public',component : PublicComponent},

]
},

{path:'' ,redirectTo:'/home',pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
