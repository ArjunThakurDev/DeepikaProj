using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ChargerInfo.API.Entities
{
    public class ChargerInfoContext : DbContext
    {
        public ChargerInfoContext(DbContextOptions<ChargerInfoContext> Options)
            : base(Options)
        {
            Database.Migrate();
            Database.EnsureCreated();
        }
        public DbSet<Charger> chargers { get; set; }
        public DbSet<Session> sessions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Charger Configurations
            modelBuilder.Entity<Charger>().HasKey(n => n.Id);
            modelBuilder.Entity<Charger>().Property(n => n.ChargerStationType).IsRequired().HasColumnType("nvarchar(100)").HasMaxLength(100);
            modelBuilder.Entity<Charger>().Property(n => n.PowerInVolt).IsRequired().HasColumnType("int");

            //Session Configurations
            modelBuilder.Entity<Session>().HasKey(n => n.Id);
            modelBuilder.Entity<Session>().Property(n => n.SessionStartTime).IsRequired().HasColumnType("datetime2 ").HasDefaultValue(DateTime.Now);
            modelBuilder.Entity<Session>().Property(n => n.SessionStopTime).HasColumnType("datetime2 ");
            modelBuilder.Entity<Session>().Property(n => n.Status).HasColumnType("nvarchar(100)").HasMaxLength(100);
            //Session Constraints
            modelBuilder.Entity<Session>().HasOne(p => p.Charger)
                .WithMany(c => c.Sessions)
                .HasForeignKey(se => se.ChargerId).HasConstraintName("ForeignKey_Session_Charger");

        }
    }
}
