function calcularCostoEstacionamiento() {
    let continuar = true;

    while (continuar) {
        // Captura las horas de entrada y salida
        let horaEntrada = parseFloat(prompt("Ingrese la hora de entrada (formato de 24 horas, por ejemplo, 8.00 o 14.30):"));
        let horaSalida = parseFloat(prompt("Ingrese la hora de salida (formato de 24 horas, por ejemplo, 10.00 o 18.45):"));
        
        // Verifica que las horas ingresadas sean válidas
        if (isNaN(horaEntrada) || isNaN(horaSalida) || horaEntrada >= horaSalida) {
            console.log("Horas ingresadas no válidas. Inténtelo de nuevo.");
            continue;
        }
        
        // Calcula la cantidad de horas de permanencia
        let horasPermanencia = horaSalida - horaEntrada;
        let costo = 0;

        // Calcula el costo según las reglas definidas
        if (horasPermanencia < 2) {
            costo = horasPermanencia * 3000;
        } else if (horasPermanencia <= 5) {
            costo = horasPermanencia * 2500;
        } else {
            costo = horasPermanencia * 2000;
        }
        
        // Muestra el costo calculado
        console.log(`Horas de permanencia: ${horasPermanencia.toFixed(2)} horas`);
        console.log(`El costo total es: $${costo}`);
        
        // Pregunta si se desea calcular para otro vehículo
        let respuesta = prompt("¿Desea calcular el costo para otro vehículo? (sí/no)").toLowerCase();
        if (respuesta !== 'sí' && respuesta !== 'si') {
            continuar = false;
        }
    }

    console.log("Sistema de estacionamiento cerrado.");
}

calcularCostoEstacionamiento();