/* 🚀 Ejercicios de Métodos de Arrays en JavaScript
📌 Contexto
1️⃣ Recorrer y mostrar productos (forEach)
2️⃣ Crear un array de nombres de productos y verificar disponibilidad (map + includes)
3️⃣ Aplicar un descuento a los productos (map)
4️⃣ Filtrar productos por precio (filter)
5️⃣ Obtener los primeros productos (slice)
6️⃣ Ordenar productos por precio (sort)
7️⃣ Invertir el orden de los productos (reverse)
🚀 Ejercicios de Métodos de Arrays en JavaScript#
📌 Contexto#
Eres el encargado de manejar los datos de una tienda en línea. La tienda tiene una lista de productos disponibles y una lista de pedidos realizados por los clientes.

Copiar */
   const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ]; 
productos.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});

const nombresProductos = productos.map(producto => producto.nombre);
const productoBuscado = "Tablet";

if (nombresProductos.includes(productoBuscado)) {
  console.log(`${productoBuscado} está disponible.`);
} else {
  console.log(`${productoBuscado} no está disponible.`);
}


const productosConDescuento = productos.map(producto => {
  return {
    nombre: producto.nombre,
    precioOriginal: producto.precio,
    precioDescuento: (producto.precio * 0.8).toFixed(2) 
  };
});
productosConDescuento.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio Original: $${producto.precioOriginal}, Con Descuento: $${producto.precioDescuento}`);
});


const productosBaratos = productos.filter(producto => producto.precio <= 100);
productosBaratos.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});


const primerosProductos = productos.slice(0, 3);
primerosProductos.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});

const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
productosOrdenados.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});



const productosInvertidos = [...productos].reverse();
productosInvertidos.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});