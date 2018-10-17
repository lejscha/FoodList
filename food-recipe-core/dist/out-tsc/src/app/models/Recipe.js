var Recipe = /** @class */ (function () {
    function Recipe(data) {
        this.id = data.Id;
        this.recipeName = data.recipeName;
        this.ingridients = data.ingredients;
        this.cooking = data.cooking;
        this.imageUrl = data.imageUrl;
    }
    return Recipe;
}());
export { Recipe };
export default Recipe;
//# sourceMappingURL=Recipe.js.map