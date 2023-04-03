'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/globals.css';

const productos = [  {    nombre: 'Cerrojo para puerta',    precio: 10,    stock: 5  },  {    nombre: 'Cerradura master lock con llave',    precio: 20,    stock: 10  },  {    nombre: 'Cerradura master lock',    precio: 45,    stock: 21  },  {    nombre: 'Placa para conexion de telefono',    precio: 12,    stock: 44  },  {    nombre: 'Panel de electricidad',    precio: 21,    stock: 32  },  {    nombre: 'T-king - Probador inalámbrico de conexión de tuberías',    precio: 15,    stock: 29  },  {    nombre: 'Interruptor eléctrico',    precio: 17,    stock: 54  },  {    nombre: 'Enchufe de electricidad',    precio: 10,    stock: 30  },  {    nombre: 'Cableado electrico',    precio: 22,    stock: 17  },];

const Productos = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className={`${styles['block']} ${styles['border']} ${styles['border-gray-400']} ${styles['rounded-lg']} ${styles['hover:shadow-lg']} ${styles['hover:border-gray-500']} ${styles['p-4']} ${styles['text-gray-800']}`} style={{ 
        background: "linear-gradient(to top, #a2d2ff, #D8DAD3)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        animation: "scroll 100s linear infinite",
        height: "100vh",
        margin: 0,
        padding: 0,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: "auto",
      }}>
    <div className="search-container">
      <div className="amazon-search" style={{width: "50%"}}>
        <input
          type="text"
          placeholder="Buscar productos"
          value={busqueda}
          onChange={handleBusqueda}
          style={{border: "2px solid black", width: "100%"}}
        />
      </div>
    </div>
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {productosFiltrados.map((producto, index) => (
          <li key={index}>
            <Link href={`/productos/${index}`} legacyBehavior>
              <a className={`${styles['s-card-container']} ${styles['s-overflow-hidden']} ${styles['aok-relative']} ${styles['puis-wide-grid-style']} ${styles['puis-wide-grid-style-t2']} ${styles['puis-expand-height']} ${styles['puis-include-content-margin']} ${styles['puis']} ${styles['s-latency-cf-section']} ${styles['s-card-border-gray-500']} ${styles['block']} ${styles['border']} ${styles['border-gray-400']} ${styles['rounded-lg']} ${styles['hover:shadow-lg']} ${styles['hover:border-gray-500']} ${styles['p-4']} ${styles['text-gray-800']}`} style={{textDecoration: "none", textAlign: "center"}}>
                <Image src={require(`../images/${index}.png`)} width={500} height={300} alt={producto.nombre} className={`${styles['float-left']}`} />
                <h2 className={`${styles['text-lg']} ${styles['font-semibold']} ${styles['mt-2']} ${styles['text-center']}`}>{producto.nombre}</h2>
                <p className={`${styles['text-sm']} ${styles['text-left']} ${styles['mt-2']}`}>Precio: ${producto.precio}</p>
                <p className={`${styles['text-sm']} ${styles['text-left']} ${styles['mt-2']}`}>Disponibilidad: {producto.stock} unidades</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Productos;