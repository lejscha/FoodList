using System;
using System.Collections.Generic;
using recipe_food.Models;

namespace recipe_food.Services
{
    internal class MockService : IMockService
    {
        public List<Recipe> GetRecipiesMock()
        {
            return GenerateMockList();
        }

        public List<Recipe> GetRecipiesByTagsMock()
        {
            return GenerateMockList();
        }

        public List<Recipe> GenerateMockList()
        {
            return new List<Recipe>
            {
                new Recipe
                {
                    Id = Guid.NewGuid(),
                    RecipeName = "Spaghetti & Köttfärssås",
                    Cooking = "Bryn köttfärsen och grönsakerna i oljan, tillsätt tomatpuré och bryn med den ett tag. Tillsätt krossade tomater, hönsbuljong och soja, koka sakta 15 minuter, smaksätt med salt och peppar. Starta timer Koka spagetti enligt anvisningen på förpackningen. Till servering: Servera med riven parmesanost och körsbärstomater.",
                    Ingridients = new List<string>{
                        "500 g nötfärs",
                        "1 gul lök (skalad och hackad)",
                        "2 vitlöksklyftor (skalade och finhackade)",
                        "2 morötter (skalade och rivna)",
                        "2 msk matolja",
                        "1 /2 dl tomatpuré",
                        "500 g krossade tomater",
                        "2 dl hönsbuljong",
                        "2 msk kinesisk soja",
                        "salt och svartpeppar",
                        "4 portioner spaghetti",
                    },
                    ImageUrl = new Uri("https://www.ica.se//icase.azureedge.net/imagevaultfiles/id_101412/cf_259/spagetti-och-kottfarssas-712805-2.jpg"),
                    Tags = new List<Tag>
                    {
                       new Tag
                       {
                            Name = "Köttfärs"
                       },
                        new Tag
                       {
                            Name = "Kött"
                       },
                         new Tag
                       {
                            Name = "Pasta"
                       },
                          new Tag
                       {
                            Name = "Spaghetti"
                       },
                           new Tag
                       {
                            Name = "Vardagsmat"
                       },
                    }
                },
                  new Recipe
                {
                    Id = Guid.NewGuid(),
                    RecipeName = "Pizza bianco med vitlöksfärskost, quorn och tomat",
                    Cooking = "Sätt ugnen på 225°C. Skala och hacka löken. Stek lök, färs och oregano i oljan i en stekpanna. Smaka av med salt och peppar. Sänk värmen något och rör ner tomatpeston. Blanda färskost med crème fraiche. Skiva tomaterna. Lägg pizzabottnarna på två plåtar med bakplåtspapper. Fördela färskosten och färs på pizzabottnarna. Lägg på tomatskivorna och strö på osten. Grädda pizzorna i omgångar mitt i ugnen ca 10 minuter per plåt. Starta timer Till servering: Garnera gärna med persilja.",
                    Ingridients = new List<string>{
                        "1 rödlök",
                        "300 g quornfärs",
                        "2 tsk torkad oregano",
                        "2 msk olivolja",
                        "salt",
                        "svartpeppar",
                        "3 msk tomatpesto",
                        "200 g färskost med vitlök & örter",
                        "1 dl crème fraiche",
                        "2 tomater",
                        "2 pizzabottnar (à 250 g)",
                        "2 dl riven ost"
                    },
                    ImageUrl = new Uri("https://www.ica.se//icase.azureedge.net/imagevaultfiles/id_63016/cf_259/pizza-715457.jpg"),
                    Tags = new List<Tag>
                    {
                       new Tag
                       {
                            Name = "Pizza"
                       },
                        new Tag
                       {
                            Name = "Quorn"
                       },
                         new Tag
                       {
                            Name = "Helgmat"
                       },
                          new Tag
                       {
                            Name = "Pizzadeg"
                       }
                    }
                }
            };
        }
    }
}