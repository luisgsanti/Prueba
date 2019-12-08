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
    public class CalificacionController : ControllerBase
    {
        private readonly DocenteContext _context;
        public CalificacionController(DocenteContext context)
        {
            _context = context;
            /*if (_context.Docentes.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Docentes.Add(new Docente { Identificacion="12345", PrimerNombre= "Luis",
                                                    SegundoNombre="Eduardo", PrimerApellido="Gomez",
                                                    SegundoApellido="Santiago", Correo= "luis@gmai.com",
                                                    /*FechaNacimiento="30/06/00",*/ /*Genero="MASCULINO", 
                                                    Telefono=1234,*//*Cargo="DOCENTE", 
                                                    Facultad= "CIENCIAS DE LA SALUD", Programa= "ENFERMERÍA",
                                                    Estado="ACTIVO" });
                _context.SaveChanges();
            }*/
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Calificaciones>>> GetTaskItems()
        {
        return await _context.Calificaciones.ToListAsync();
        }

       /* [HttpGet("ActivoAdministrativo")]
        public async Task<ActionResult<IEnumerable<Calificaciones>>> GetTaskActivas()
        {
            return await _context.Calificaciones.Where(p=>p.Estado=="ACTIVO" & p.Cargo!="DOCENTE").ToListAsync();
        }*/

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Calificaciones>>> GetTaskItem(string id)
        {
            return await _context.Calificaciones.Where(p=>p.Id_DocenteCalificado==id).ToListAsync();
        }
        
        /*
        public async Task<ActionResult<Calificaciones>> GetTaskItem(string id)
        {
            var calificacion = await _context.Calificaciones.FindAsync(id);
            if (calificacion == null)
            {
                return NotFound();
            }
            return calificacion;
        }*/

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Calificaciones>> PostTaskItem(Calificaciones item)
        {
            _context.Calificaciones.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Id }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Calificaciones item)
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
            var Calificaciones = await
            _context.Calificaciones.FindAsync(id);
            if (Calificaciones == null)
            {
                return NotFound();
            }
            _context.Calificaciones.Remove(Calificaciones);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}