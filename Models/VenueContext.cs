using Microsoft.EntityFrameworkCore;

namespace PlayGrounds.Models
{
    public class VenueContext : DbContext
    {
        public VenueContext(DbContextOptions<VenueContext> options) : base(options)
        {
        }

        public DbSet<VenueType> VenueTypes { get; set; }
        public DbSet<Country> Countries { get; set; }
    }
}
