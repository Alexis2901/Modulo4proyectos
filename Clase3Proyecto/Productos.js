const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    { nombre: "Reloj", precio: 75, categoria: "Accesorios" },
    { nombre: "Cargador 45w", precio: 80, categoria: "Electrónica" }
];
//Menor a $100
const productosFiltrados = productos.filter(producto => producto.precio < 100);
console.log("Productos filtrados:", productosFiltrados);
//Orden Alfabético
const productosOrdenados = productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados:", productosOrdenados);
//Nombres de producto
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de productos:", nombresProductos);
//Precio total de productos filtrados con reduce
const precioTotal = productosFiltrados.reduce((total, producto) => total + producto.precio, 0);
console.log("Precio total de los productos filtrados:", precioTotal);
//Uso de some para identicar la categoria de un producto
const tieneRopa = productosFiltrados.some(producto => producto.categoria === "Ropa");
console.log("¿Hay productos de Ropa en la lista filtrada?", tieneRopa);
//Uso de every para validar si los productos de la lista son de la misma categoría
const mismaCategoria = productosFiltrados.every(producto => producto.categoria === productosFiltrados[0].categoria);
console.log("¿Todos los productos filtrados pertenecen a la misma categoría?", mismaCategoria);