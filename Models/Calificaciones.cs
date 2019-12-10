using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace ProyectoWeb.Models
{
    public class Calificaciones
    {
        public int Id { get; set; }
        [Required] public string Id_DocenteCalificado { get; set; }
        public string Id_Jefe { get; set; }
        public string Id_Par { get; set; }
        public decimal Nota_Jefe { get; set; }
        public decimal Nota_Par { get; set; }
        public decimal Nota_Auto { get; set; }
        public decimal Promedio { get; set; }
        public string Observaciones { get; set; }
        public string Fecha_Calificacion { get; set; }
        
    }
}