using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectoWeb.Models;

using System;
using Microsoft.AspNetCore.Http;

namespace ProyectoWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class LoginController : ControllerBase
    {
        private readonly DocenteContext _context;
        private List<Login> _logins;


        public LoginController(DocenteContext context)
        {
            _context = context;
            if (_context.Login.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Login.Add(new Login { Identificacion=1111, Usuario ="Pedro", Clave="qqqqq", Rol="ADMINISTRADOR"});
                _context.Login.Add(new Login { Identificacion=1111, Usuario ="Yambra", Clave="qqqqq", Rol="DOCENTE"});
                _context.Login.Add(new Login { Identificacion=2222, Usuario ="Luis", Clave="aaaaaa", Rol="DOCENTE EN COMISION ADMINISTRATIVA"});
                
                _context.SaveChanges();
            }
        }

        // GET: api/Login
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Login>>> GetTaskItems()
        {
        return await _context.Login.ToListAsync();
        }

/*
        [HttpGet("{usuario}")]
        public Login Get (string usuario){
            return _logins.FirstOrDefault(t=>t.Usuario == usuario);
        }
*/


 
        // GET: api/Login/5
        [HttpGet("{usuario}")]
        public async Task<ActionResult<Login>> GetTaskItem(string usuario)
        {
            var lista = await _context.Login.Where(p=>p.Usuario==usuario).ToListAsync();
            int id=0;
            
            foreach (var item in lista)
            {
                id = item.Id;
            }

            var user = await _context.Login.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        // POST: api/Login
        /*[HttpPost]
        public async Task<ActionResult<Login>> PostTaskItem(Login item)
        {
            _context.Login.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Id }, item);
        }*/

        // PUT: api/Login/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Login item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Login/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskItem(int id)
        {
            var Login = await
            _context.Login.FindAsync(id);
            if (Login == null)
            {
                return NotFound();
            }
            _context.Login.Remove(Login);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}