const listaDeCompras = []

const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`${producto} se agrego el producto a la lista de forma correcta.`);
    } else {
        console.log(`${producto} ya está agregado en la lista.`);
    }
};

const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`${producto} se elimino el producto de la lista.`);
    } else {
        console.log(`${producto} no se encuentra el producto en la lista.`);
    }
};

const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras se encuentra vacía.");
    } else {
        console.log("Lista de compras:", listaDeCompras.join(", "));
    }
};

agregarProducto("Lapiceros");
agregarProducto("Hojas Blancas");
agregarProducto("Libreta");
agregarProducto("Hojas Blancas");
mostrarLista();
eliminarProducto("Hojas Blancas");
mostrarLista();
eliminarProducto("Laptop");