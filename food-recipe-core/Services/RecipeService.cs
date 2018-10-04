using System.Collections.Generic;
using recipe_food.Controllers;
using recipe_food.Models;

namespace recipe_food.Services
{
    public class RecipeService : IRecipeService
    {
        public List<Recipe> GetAllRecipies()
        {

            IMockService _service = new MockService();

            return _service.GetRecipiesMock();
        }

        public List<Recipe> GetRecipiesByTags()
        {
            IMockService _service = new MockService();

            return _service.GetRecipiesMock();
        }
    }
}