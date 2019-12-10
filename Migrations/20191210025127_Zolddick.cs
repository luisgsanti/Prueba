using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoWeb.Migrations
{
    public partial class Zolddick : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Calificaciones",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Id_DocenteCalificado = table.Column<string>(nullable: false),
                    Id_Jefe = table.Column<string>(nullable: true),
                    Id_Par = table.Column<string>(nullable: true),
                    Nota_Jefe = table.Column<decimal>(nullable: false),
                    Nota_Par = table.Column<decimal>(nullable: false),
                    Nota_Auto = table.Column<decimal>(nullable: false),
                    Promedio = table.Column<decimal>(nullable: false),
                    Observaciones = table.Column<string>(nullable: true),
                    Fecha_Calificacion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calificaciones", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Docentes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Identificacion = table.Column<string>(nullable: false),
                    PrimerNombre = table.Column<string>(nullable: false),
                    PrimerApellido = table.Column<string>(nullable: false),
                    Correo = table.Column<string>(nullable: false),
                    Genero = table.Column<string>(nullable: false),
                    Cargo = table.Column<string>(nullable: false),
                    Facultad = table.Column<string>(nullable: false),
                    Programa = table.Column<string>(nullable: false),
                    SegundoNombre = table.Column<string>(nullable: true),
                    SegundoApellido = table.Column<string>(nullable: true),
                    Estado = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docentes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Login",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Identificacion = table.Column<int>(nullable: false),
                    Usuario = table.Column<string>(nullable: false),
                    Clave = table.Column<string>(nullable: false),
                    Rol = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Login", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Preguntas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descripcion = table.Column<string>(nullable: false),
                    Categoria = table.Column<string>(nullable: false),
                    Estado = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Preguntas", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Calificaciones");

            migrationBuilder.DropTable(
                name: "Docentes");

            migrationBuilder.DropTable(
                name: "Login");

            migrationBuilder.DropTable(
                name: "Preguntas");
        }
    }
}
