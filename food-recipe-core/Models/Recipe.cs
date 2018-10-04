using System;
using System.Collections.Generic;

namespace recipe_food.Models
{
    public class Recipe
    {
        public Guid Id { get; set; }
        public string RecipeName { get; set; }
        public List<string> Ingridients { get; set; }
        public string Cooking { get; set; }
        public Uri ImageUrl { get; set; }
        public List<Tag> Tags { get; set; }
    }
}