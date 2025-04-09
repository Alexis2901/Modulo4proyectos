// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota", "Cocinita"];

// Función recursiva
function findGift(gifts, giftName, index = 0) {
    //No se encuentra en la lista
    if (index === gifts.length) {
        return `${giftName} no se encuentra en la lista.`;
    }

    // Si se encuentra el regalo
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Buscar por posición
    return findGift(gifts, giftName, index + 1);
}

let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));

giftToFind = "Cocinita";
console.log(findGift(gifts, giftToFind));

giftToFind = "Pistola de agua";
console.log(findGift(gifts, giftToFind));
