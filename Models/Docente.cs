using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace ProyectoWeb.Models
{
    public class Docente
    {
        public int Id { get; set; }
        
        [Required] public string Identificacion { get; set; }
        [Required] public string PrimerNombre { get; set; }
        [Required] public string PrimerApellido { get; set; }
        [Required] public string Correo { get; set; }
        [Required] public string Genero { get; set; }
        [Required] public string Cargo { get; set; }
        [Required] public string Facultad { get; set; }
        [Required] public string Programa { get; set; }

        public string SegundoNombre { get; set; }
        public string SegundoApellido { get; set; }
        //public string FechaNacimiento { get; set; }
        //public int Telefono { get; set; }
        public string Estado { get; set; }
    }
}