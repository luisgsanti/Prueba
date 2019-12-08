using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectoWeb.Models;


namespace ProyectoWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocenteController : ControllerBase
    {
        private readonly DocenteContext _context;
        public DocenteController(DocenteContext context)
        {
            _context = context;
            if (_context.Docentes.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Docentes.Add(new Docente { Identificacion="12345", PrimerNombre= "Luis",
                                                    SegundoNombre="Eduardo", PrimerApellido="Gomez",
                                                    SegundoApellido="Santiago", Correo= "luis@gmai.com",
                                                    /*FechaNacimiento="30/06/00",*/ Genero="MASCULINO", 
                                                    /*Telefono=1234,*/Cargo="DOCENTE", 
                                                    Facultad= "CIENCIAS DE LA SALUD", Programa= "ENFERMERÍA",
                                                    Estado="ACTIVO" });
                _context.SaveChanges();
            }
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Docente>>> GetTaskItems()
        {
        return await _context.Docentes.ToListAsync();
        }

        [HttpGet("ActivoAdministrativo")]
        public async Task<ActionResult<IEnumerable<Docente>>> GetTaskActivas()
        {
            return await _context.Docentes.Where(p=>p.Estado=="ACTIVO" & p.Cargo!="DOCENTE").ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Docente>> GetTaskItem(int id)
        {
            var docente = await _context.Docentes.FindAsync(id);
            if (docente == null)
            {
                return NotFound();
            }
            return docente;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Docente>> PostTaskItem(Docente item)
        {
            item.Estado="ACTIVO";
            _context.Docentes.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Identificacion }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Docente item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskItem(int id)
        {
            var Docente = await
            _context.Docentes.FindAsync(id);
            if (Docente == null)
            {
                return NotFound();
            }
            _context.Docentes.Remove(Docente);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}