'use client'
import Link from 'next/link';
import Image from 'next/image';

const productos = [
  {
    nombre: 'Cerrojo para puerta',
    precio: 10,
    stock: 5
  },
  {
    nombre: 'Cerradura master lock con llave',
    precio: 20,
    stock: 10
  },
  {
    nombre: 'Cerradura master lock',
    precio: 45,
    stock: 21
  },
  {
    nombre: 'Placa para conexion de telefono',
    precio: 12,
    stock: 44
  },
  {
    nombre: 'Panel de electricidad',
    precio: 21,
    stock: 32
  },
  {
    nombre: 'T-king - Probador inalámbrico de conexión de tuberías',
    precio: 15,
    stock: 29
  },
  {
    nombre: 'Interruptor eléctrico',
    precio: 17,
    stock: 54
  },
  {
    nombre: 'Enchufe de electricidad',
    precio: 10,
    stock: 30
  },
  {
    nombre: 'Cableado electrico',
    precio: 22,
    stock: 17
  },
];

const Productos = () => {
  return (
    <div style={{ 
        background: "linear-gradient(to top, #a2d2ff, #D8DAD3)",
        height: "100vh",
        margin: 0,
        padding: 0
      }}>
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {productos.map((producto, index) => (
          <li key={index}>
            <Link href={`/productos/${index}`} legacyBehavior>
              <a
                style={{
                  display: "block",
                  padding: "0.5rem",
                  textDecoration: "none",
                  textAlign: "center",
                  border: "3px solid #320D53"
                }}>
                <Image src={require(`../images/${index}.png`)} width={200} height={200} alt={producto.nombre} style={{ margin: "0 auto" }} />
                <h2>{producto.nombre}</h2>
                <p className="text-left md:text-center">Precio: ${producto.precio}</p>
                <p className="text-left md:text-center">Disponibilidad: {producto.stock} unidades</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;