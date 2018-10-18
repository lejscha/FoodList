import Tag from './Tag'

export class Recipe {

  constructor(data: any) {
    this.id = data.id;
    this.name = data.recipeName;
    this.ingridients = data.ingridients;
    this.cooking = data.cooking;
    this.imageUrl = data.imageUrl;
    this.tags = data.tags
  }

  id: string;
  name: string;
  ingridients: string[];
  cooking: string;
  imageUrl: string;
  tags: Tag[];
}

export default Recipe;
