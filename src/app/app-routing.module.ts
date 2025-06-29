import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'' ,redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'recipes', loadChildren: () => import('../app/recipes/recipes.module').then(m => m.RecipesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
