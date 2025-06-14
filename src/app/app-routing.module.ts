import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AboutComponent } from './about/about.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

const routes: Routes = [
  {path:'' ,redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'recipes', component:RecipesComponent},
  {path:'about',component:AboutComponent},
  {path:'add', component:AddRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
