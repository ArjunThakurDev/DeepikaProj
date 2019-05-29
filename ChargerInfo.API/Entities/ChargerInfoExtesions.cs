using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChargerInfo.API.Entities
{
    public static class ChargerInfoExtension
    {
        public static void EnsureSeedDataForContext(this ChargerInfoContext context)
        {
            if (context.chargers.Any())
            {
                return;
            }
            var chargerDb = new List<Charger>()
            {
                new Charger()
                {
                    ChargerStationType = "RESIDENTIAL",
                    PowerInVolt = 240
                },
                new Charger()
                {
                    ChargerStationType = "PUBLIC",
                    PowerInVolt = 120
                }
            };
            context.chargers.AddRange(chargerDb);
            context.SaveChanges();
        }
    }
}
