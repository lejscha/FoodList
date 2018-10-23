using System.Collections.Generic;
using System.Linq;
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

    public IEnumerable<Tag> GetTags()
    {
      IMockService _service = new MockService();

      var allTags = _service.GetTagsMock();

      var d = allTags.GroupBy(p => p.Id).Select(grp => grp.FirstOrDefault());






      return d;

    }
  }
}
