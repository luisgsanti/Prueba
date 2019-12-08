using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace ProyectoWeb.Models
{
    public class Login
    {
        public int Id { get; set; }
        [Required] public int Identificacion { get; set; }
        [Required] public string Usuario { get; set; }
        [Required] public string Contraseña { get; set; }
        [Required] public string Rol { get; set; }
    }
}