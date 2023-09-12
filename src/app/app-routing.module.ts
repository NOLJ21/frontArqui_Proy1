import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importar el guard
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: "full", canActivate: [AuthGuard], data: { roles: ['user'] }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
