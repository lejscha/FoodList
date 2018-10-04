using recipe_food.Models;
using System.Collections.Generic;

namespace recipe_food.Controllers
{
    public interface IRecipeService
    {
        List<Recipe> GetAllRecipies();

        List<Recipe> GetRecipiesByTags();
    }
}   