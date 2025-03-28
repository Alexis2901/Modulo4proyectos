const invitados = ["Ana", "Angel","Carlos", "Cecilia", "Daniel", "Diana", "Eduardo",];

function encontrarPareja(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return null;
    }

    let inicio = 0;
    let siguiente = 1;
    while (siguiente < arr.length) {
        if (arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]];
        }
        inicio++;
        siguiente++;
    }
    return null;
}

console.log(encontrarPareja(invitados));
