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

    public class PreguntaController : ControllerBase
    {
        private readonly DocenteContext _context;
        public PreguntaController(DocenteContext context)
        {
            _context = context;
            if (_context.Preguntas.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Preguntas.Add(new Pregunta { Descripcion = "Planea y orienta su gestion con base en "+
                                                    "la mision y las politicas institucionales",
                                                    Categoria= "RESPONSABILIDAD", Estado = true});
                _context.SaveChanges();
            }
        }

        // GET: api/Pregunta
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pregunta>>> GetTaskItems()
        {
        return await _context.Preguntas.ToListAsync();
        }

        // GET: api/Pregunta/Activas
        [HttpGet("Activas")]
        public async Task<ActionResult<IEnumerable<Pregunta>>> GetTaskActivas()
        {
            return await _context.Preguntas.Where(p=>p.Estado==true).ToListAsync();
        }


        // GET: api/Pregunta/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pregunta>> GetTaskItem(int id)
        {
            var pregunta = await _context.Preguntas.FindAsync(id);
            if (pregunta == null)
            {
                return NotFound();
            }
            return pregunta;
        }

        // POST: api/Pregunta
        [HttpPost]
        public async Task<ActionResult<Pregunta>> PostTaskItem(Pregunta item)
        {
            _context.Preguntas.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Id }, item);
        }

        // PUT: api/Pregunta/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Pregunta item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Pregunta/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskItem(int id)
        {
            var Pregunta = await
            _context.Preguntas.FindAsync(id);
            if (Pregunta == null)
            {
                return NotFound();
            }
            _context.Preguntas.Remove(Pregunta);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}