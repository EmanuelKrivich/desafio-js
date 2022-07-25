function probarCodigo() {
    let respuesta = prompt("¿Desea agendar un turno? Responda con s o n.");
    let dia;


    while (respuesta != "n") {
        dia = prompt("Escoja un día de preferencia de lunes a viernes o ecriba ESC para cancelar.")
        switch (dia) {
            case "lunes":
                alert("Se le ha agendado un turno el día Lunes")
                break;

            case "martes":
                alert("Se le ha agendado un turno el día Martes")
                break;

            case "miercoles":
                alert("Se le ha agendado un turno el día Miercoles")
                break;

            case "jueves":
                alert("Se le ha agendado un turno el día Jueves")
                break;

            case "viernes":
                alert("Se le ha agendado un turno el día Viernes")
                break;

        }
        respuesta = prompt("¿Desea agendar otro turno?");
    }

    alert("Gracias por visitar nuestro sitio.");

}