import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PoliciesComponent } from './policies/policies.component';
import { HelpComponent } from './help/help.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { RepasswordComponent } from './repassword/repassword.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'help', component: HelpComponent },
  { path: 'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'fpassword',component:FpasswordComponent},
  {path: 'repassword', component:RepasswordComponent},
 

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
