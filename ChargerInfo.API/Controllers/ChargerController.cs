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
                return NoContent();
            }
            else
            {
                return Ok(charger);
            }
        }

        [HttpPost("AddCharger")]
        public IActionResult AddCharger([FromBody] Charger charger)
        {
            ErrorMessage err = ValidateAddCharger(charger);
            if (!err.State)
            {
                return BadRequest(err.Message);
            }
            var results = _chargerRepository.AddCharger(charger);

            if (results == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(results);
            }

        }

        [HttpPut("UpdateCharger")]
        public IActionResult UpdateCharger([FromBody] Charger charger)
        {
            ErrorMessage err = ValidateUpdateCharger(charger);
            if (!err.State)
            {
                return BadRequest(err.Message);
            }
            var results = _chargerRepository.UpdateCharger(charger);
            if (results == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(results);
            }
        }

        [HttpDelete("DeleteCharger/{chargerId}")]
        public IActionResult DeleteCharger(int chargerId)
        {
            ErrorMessage err = ValidateDeleteCharger(chargerId);
            if (!err.State)
            {
                return BadRequest(err.Message);
            }
            _chargerRepository.DeleteCharger(chargerId);
            return NoContent();
        }


        private ErrorMessage ValidateAddCharger(Charger charger)
        {
            ErrorMessage err = new ErrorMessage();

            if (charger.ChargerStationType == null)
            {
                err.Message = "ChargerStationType is Required";
                err.State = false;
            }
            else if (charger.PowerInVolt <= 0)
            {
                err.Message = "PowerInVolt is Required";
                err.State = false;
            }
            else
            {
                err.State = true;
            }
            return err;
        }

        private ErrorMessage ValidateUpdateCharger(Charger charger)
        {
            ErrorMessage err = new ErrorMessage();
            
            if (charger.Id <= 0)
            {
                err.Message = "ChargerId is Required";
                err.State = false;
            }
            else
            {
                err.State = true;
            }
            return err;
        }

        private ErrorMessage ValidateDeleteCharger(int chargerId)
        {
            ErrorMessage err = new ErrorMessage();

            if (chargerId <= 0)
            {
                err.Message = "Charger Id is Required";
                err.State = false;
            }
            else
            {
                err.State = true;
            }
            return err;
        }
        

    }
}
