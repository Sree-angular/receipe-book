import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { RecipeResolverService } from './recipe-resolver.service';

const routes: Routes = [
  {path:'', component:RecipesComponent ,
    resolve: { recipesData: RecipeResolverService }
      
  },
  {path:'add', component:AddRecipeComponent}
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesModule { }
   