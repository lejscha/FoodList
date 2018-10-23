var Recipe = /** @class */ (function () {
    function Recipe(data) {
        this.id = data.id;
        this.name = data.recipeName;
        this.ingridients = data.ingridients;
        this.cooking = data.cooking;
        this.imageUrl = data.imageUrl;
        this.tags = data.tags;
    }
    return Recipe;
}());
export { Recipe };
export default Recipe;
//# sourceMappingURL=Recipe.js.map