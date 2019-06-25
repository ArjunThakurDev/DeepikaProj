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
        public Charger AddCharger(Charger charger)
        {

            _context.chargers.Add(charger);
            _context.SaveChanges();
            return charger;
        }

        public Charger UpdateCharger(Charger charger)
        {
            var chargerFromDb = GetCharger(charger.Id);

            chargerFromDb.ChargerStationType = charger.ChargerStationType;
            chargerFromDb.PowerInVolt = charger.PowerInVolt;
            _context.chargers.Update(chargerFromDb);
            _context.SaveChanges();
            return charger;
        }

        public void DeleteCharger(int chargerId)
        {
            var chargerFromDb = GetCharger(chargerId);
            _context.chargers.Remove(chargerFromDb);
            _context.SaveChanges();


        }
    }
}
