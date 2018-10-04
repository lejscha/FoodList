using recipe_food.Models;
using System.Collections.Generic;

namespace recipe_food.Services
{
    internal interface IMockService
    {
        List<Recipe> GetRecipiesMock();

        List<Recipe> GetRecipiesByTagsMock();
    }
}