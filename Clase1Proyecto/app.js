import { registrarDestino, mostrarItinerario } from "./viajes.js";

const iniciarApp = () => {
    registrarDestino("Paris", "2024-06-15", "Avión", "Hotel", 2);
    registrarDestino("Londres", "2024-07-01", "Tren", "Airbnb", 4);
    registrarDestino("Tokio", "2024-09-10", "Avión", "Hostal", 1);
    registrarDestino("New York","2024-08-15","Tren","Hostal", 8);

    mostrarItinerario();
};

iniciarApp();
