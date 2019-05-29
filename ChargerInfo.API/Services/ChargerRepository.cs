using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChargerInfo.API.Entities;

namespace ChargerInfo.API.Services
{
    public class ChargerRepository : IChargerRepository
    {
        private ChargerInfoContext _context;
        public ChargerRepository(ChargerInfoContext context)
        {
            _context = context;
        }

        public IEnumerable<Charger> GetChargers()
        {
            return _context.chargers.OrderBy(c => c.Id).ToList();
        }
        public Charger GetCharger(int chargerId)
        {
            return _context.chargers.FirstOrDefault(c => c.Id == chargerId);
        }
    }
}
