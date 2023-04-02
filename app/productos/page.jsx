'use client'
import Link from 'next/link';
import Image from 'next/image';
import Imagen1 from '../images/0.png'
import Imagen2 from '../images/1.png'
import Imagen3 from '../images/2.png'
import Imagen4 from '../images/3.png'
import Imagen5 from '../images/4.png'
import Imagen6 from '../images/5.png'
import Imagen7 from '../images/6.png'
import Imagen8 from '../images/7.png'
import Imagen9 from '../images/8.png'
import Imagen10 from '../images/9.png'

const productos = [
  { nombre: 'Cerrojo para puerta', precio: 10, stock: 5 },
  { nombre: 'Cerradura master lock con llave', precio: 20, stock: 10 },
  { nombre: 'Cerradura master lock', precio: 45, stock: 21 },
  { nombre: 'Placa para conexion de telefono', precio: 12, stock: 44 },
  { nombre: 'Panel de electricidad', precio: 21, stock: 32 },
  { nombre: 'T-king - Probador inalámbrico de conexión de tuberías', precio: 15, stock: 29 },
  { nombre: 'Interruptor eléctrico', precio: 17, stock: 54 },
  { nombre: 'Enchufe de electricidad', precio: 10, stock: 30 },
  { nombre: 'Cableado electrico', precio: 22, stock: 17 },
];

const Productos = () => {
  return (
    <div>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            <Link href={`/productos/${index}`} legacyBehavior>
              <a>
                <Image src={require(`../images/${index}.png`)} width={200} height={200} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <p>Precio: ${producto.precio}</p>
                <p>Disponibilidad: {producto.stock} unidades</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
