import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { RegisterNormalUserComponent } from './register-normal-user/register-normal-user.component';

const routes: Routes = [
  {path:"userLogin",component:UserPanelComponent},
  {path:"userLogin/registerUser",redirectTo:"/registerUser",pathMatch:"full"},
  {path:"registerUser",component:RegisterNormalUserComponent},
  {path:"",redirectTo:"",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
