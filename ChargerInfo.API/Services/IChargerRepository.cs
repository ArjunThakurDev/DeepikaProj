using System.Collections.Generic;
using ChargerInfo.API.Entities;

namespace ChargerInfo.API.Services
{
    public interface IChargerRepository
    {
        IEnumerable<Charger> GetChargers();
        Charger GetCharger(int chargerId);
        Charger AddCharger(Charger charger);
        Charger UpdateCharger(Charger charger);
        void DeleteCharger(int chargerId);

    }
}