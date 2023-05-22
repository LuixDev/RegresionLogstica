import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'principal', component:PrincipalComponent}, 
  {path: 'login', component:LoginComponent}, 
  {path: '', component:LoginComponent}, 
  {path: 'contacto', component:ContactoComponent},
  {path: 'admin', component:AdminComponent},  
  {path:'',redirectTo:'/principal',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
