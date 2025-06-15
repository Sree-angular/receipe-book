import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(private route: ActivatedRoute , private servie:RecipesService){}
  recipeList:any
  imageSrc='../../assets/bg-img.jpg'

  ngOnInit(): void {
    // this.servie.getRecipes()

    // this.servie.RecipesList.subscribe((result:any)=>{
    //   this.recipeList = result.recipes.map((data:any)=> {
    //     data.image = '../../assets/'+ data.image
    //     return data
    //   })
    //   console.log("recipeList", this.recipeList)

    // })
    this.route.data.subscribe(data => {
      console.log("data",data)
      let recipesData = data['recipesData']; // 'recipesData' is the same key used in the route
      this.servie.RecipesList.next(recipesData.recipes)
      this.recipeList = recipesData.recipes.map((data:any)=> {
        data.image = '../../assets/'+ data.image
        return data
      })
      console.log(this.recipeList);
    });
  }


}
