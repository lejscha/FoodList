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

      var allTagGrouped = allTags.GroupBy(p => p.Id);


      var listToReturn = new List<Tag>();
      foreach (var tagGroup in allTagGrouped)
      {
        tagGroup.FirstOrDefault().Count = tagGroup.Count();
        listToReturn.Add(tagGroup.FirstOrDefault());
      }



      return listToReturn;
    }
  }
}
