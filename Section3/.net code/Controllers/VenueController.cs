using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlayGrounds.Dto;
using PlayGrounds.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace PlayGrounds.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VenueController : ControllerBase
    {
        private readonly VenueContext _context;
        public VenueController(VenueContext context)
        {
            _context = context;
        }

        [HttpGet("venue-types")]
        public async Task<ActionResult<IEnumerable<VenueType>>> GetVenueTypes()
        {
            var venueTypes = await _context.VenueTypes.ToListAsync();
            return Ok(venueTypes);
        }

        [HttpGet("countries")]
        public async Task<ActionResult<IEnumerable<Country>>> GetCountries()
        {
            var countries = await _context.Countries.ToListAsync();
            return Ok(countries);
        }

        [HttpGet("list-of-playground-basis-of-country")]
        public async Task<ActionResult<IEnumerable<VenueType>>> GetListOfVenueBasisOfCountry(AcceptVenueDto accept)
        {
            var venueTypes =  await _context.VenueTypes
                .Where(v => v.Name.Contains(accept.Venue) && v.Name.Contains(accept.Location))
                .ToListAsync();
            return Ok(venueTypes);
        }
    }
}
