using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using recipe_food.Controllers;
using recipe_food.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace food_recipe_core.Controllers
{
  [Route("api/[controller]")]
  public class RecipeApiController : Controller
  {

    public ServiceBase _serviceBase = new ServiceBase();

    // GET: api/<controller>
    [Route("GetRecipes")]
    [HttpGet]
    public JsonResult Get()
    {
      return Json(_serviceBase.GetService<IRecipeService>().GetAllRecipies());
    }

    // GET: api/<controller>
    [Route("GetTags")]
    [HttpGet]
    public JsonResult GetTags()
    {
      return Json(_serviceBase.GetService<IRecipeService>().GetTags());
    }

    // GET api/<controller>/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST api/<controller>
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT api/<controller>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/<controller>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
