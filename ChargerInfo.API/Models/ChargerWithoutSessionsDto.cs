using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChargerInfo.API.Models
{
    public class ChargerWithoutSessionsDto
    {
        public int Id { get; set; }
        public string ChargerStationType { get; set; }
        public int PowerInVolt { get; set; }
    }
}
