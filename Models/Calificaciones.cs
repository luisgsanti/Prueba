using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace ProyectoWeb.Models
{
    public class Calificaciones
    {
        public int Id { get; set; }
        [Required] public string Id_DocenteCalificado { get; set; }
        public string Id_Calificador { get; set; }
        public string Tipo_Calificador { get; set; }
        public string Estado_Califiacador { get; set; }
        public decimal Nota { get; set; }
        public string Observaciones { get; set; }
        public string Fecha_Calificacion { get; set; }
        
    }
}