using recipe_food.Controllers;
using System;

namespace recipe_food.Services
{
    public class ServiceBase
    {
        public T GetService<T>()
        {
            var service = typeof(T);

            if (service.Equals(typeof(IRecipeService)))
            {
                IRecipeService returnService = new RecipeService();

                return (T)returnService;
            }

            throw new ArgumentOutOfRangeException("No action is defined for service interface " + service.Name);
        }
    }
}