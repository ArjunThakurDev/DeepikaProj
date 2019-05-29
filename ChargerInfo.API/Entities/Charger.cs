using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ChargerInfo.API.Entities
{
    [Table("Charger")]
    public class Charger
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string ChargerStationType { get; set; }
        public int PowerInVolt { get; set; }

        //Reference
        public List<Session> Sessions { get; set; }
    }
}
