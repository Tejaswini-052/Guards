import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CandeactiveGaurdGuard } from './candeactive-gaurd.guard';

const routes: Routes = [
  {path:'register' , component:RegisterComponent, canDeactivate:[CandeactiveGaurdGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
