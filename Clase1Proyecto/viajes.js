const destinos = [];

const registrarDestino = (destino, fecha, transporte, alojamiento, personas) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        alojamiento,
        personas,
        costo: calcularCosto(destino, transporte, alojamiento, personas)
    };
    destinos.push(nuevoViaje);
};

const calcularCosto = (destino, transporte, alojamiento, personas) => {
    let costoBase = 0;

    const costosDestino = {
        "Paris": 500,
        "Londres": 400,
        "New York": 600,
        "Tokio": 700
    };
    costoBase = costosDestino[destino] || 300;

    const costosTransporte = {
        "Avión": 200,
        "Tren": 100,
        "Autobús": 50
    };
    costoBase += costosTransporte[transporte] || 0;

    const costosAlojamiento = {
        "Hotel": 150,
        "Hostal": 50,
        "Airbnb": 100
    };
    costoBase += costosAlojamiento[alojamiento] || 0;

    if (personas > 3) {
        costoBase *= 0.9;
    }

    return costoBase;
};

const mostrarItinerario = () => {
    destinos.forEach((viaje, index) => {
        console.log(`Viaje ${index + 1}:`);
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Alojamiento: ${viaje.alojamiento}`);
        console.log(`Personas: ${viaje.personas}`);
        console.log(`Costo: $${viaje.costo.toFixed(2)}`);
        console.log("---------------------------");
    });
};

export { registrarDestino, mostrarItinerario, calcularCosto };
