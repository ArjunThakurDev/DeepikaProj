using ChargerInfo.API.Entities;
using ChargerInfo.API.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChargerInfo.API.Controllers
{


    [Route("api/chargerInfo")]
    public class ChargerController : Controller
    {
        private IChargerRepository _chargerRepository;
        public ChargerController(IChargerRepository chargerRepository)
        {
            _chargerRepository = chargerRepository;
        }

        [HttpGet()]
        public IActionResult GetChargers()
        {
            var results = _chargerRepository.GetChargers();

            if (results == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(results);
            }
        }

        [HttpGet("{chargerId}")]
        public IActionResult GetCharger(int chargerId)
        {
            var charger = _chargerRepository.GetCharger(chargerId);
            if (charger == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(charger);
            }
        }
    }
}
