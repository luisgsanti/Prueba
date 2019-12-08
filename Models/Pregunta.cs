using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace ProyectoWeb.Models
{
    public class Pregunta
    {
        public int Id { get; set; }

        [Required] public string Descripcion { get; set; }
        [Required] public string Categoria { get; set; }

        public bool Estado { get; set; }
        
    }
}