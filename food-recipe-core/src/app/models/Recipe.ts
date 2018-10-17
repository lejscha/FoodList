import Tag from './Tag'

export class Recipe {

  constructor(data: any) {
    this.id = data.Id;
    this.recipeName = data.recipeName;
    this.ingridients = data.ingredients;
    this.cooking = data.cooking;
    this.imageUrl = data.imageUrl;
   
  }

  id: string;
  recipeName: string;
  ingridients: string[];
  cooking: string;
  imageUrl: string;
  //tags: Tag[];
}

export default Recipe;
