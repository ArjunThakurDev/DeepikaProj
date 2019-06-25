using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ChargerInfo.API.Entities
{
    [Table("Session")]
    public class Session
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public DateTime SessionStartTime { get; set; }
        public DateTime SessionStopTime { get; set; }
        [Required]
        public string Status { get; set; }

        
        //Reference
        [Required]
        public int ChargerId { get; set; }
        public Charger Charger { get; set; }
    }
}
