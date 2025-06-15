import { Injectable ,   } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  RecipesList = new BehaviorSubject([])
  constructor(private http: HttpClient) { }

  getRecipes() :any{
   let  url ='../../assets/JSON/recipesList.json'
    // this.http.get(url).subscribe((res:any)=>{
    //   this.RecipesList.next(res)
    //   return of(res)
      
    // })
    return this.http.get<any>(url)

  }
}
