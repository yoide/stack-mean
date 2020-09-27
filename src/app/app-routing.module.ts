import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { FeatureRoutingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [

  //path: '/dashboard' PagesRoutingModule
  //path: '/auth' AuthRoutingModule
  //path: '/medicos' MedicosRoutingModule
  //path: '/compras' ComprasRoutingModule

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
  FeatureRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
