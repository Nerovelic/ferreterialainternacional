'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/globals.css";

const productos = [
  {
    id: 0,
    nombre: "Cerrojo para puerta",
    precio: 10,
    stock: 5,
    imagen: require("../productos/image/0.png"),
  },
  {
    id: 1,
    nombre: "Cerradura master lock con llave",
    precio: 20,
    stock: 10,
    imagen: require("../productos/image/1.png"),
  },
  {
    id: 2,
    nombre: "Cerradura master lock",
    precio: 45,
    stock: 21,
    imagen: require("../productos/image/2.png"),
  },
  {
    id: 3,
    nombre: "Placa para conexion de telefono",
    precio: 12,
    stock: 44,
    imagen: require("../productos/image/3.png"),
  },
  {
    id: 4,
    nombre: "Panel de electricidad",
    precio: 21,
    stock: 32,
    imagen: require("../productos/image/4.png"),
  },
  {
    id: 5,
    nombre: "T-king - Probador inalámbrico de conexión de tuberías",
    precio: 15,
    stock: 29,
    imagen: require("../productos/image/5.png"),
  },
  {
    id: 6,
    nombre: "Interruptor eléctrico",
    precio: 17,
    stock: 54,
    imagen: require("../productos/image/6.png"),
  },
  {
    id: 7,
    nombre: "Enchufe de electricidad",
    precio: 10,
    stock: 30,
    imagen: require("../productos/image/7.png"),
  },
  {
    id: 8,
    nombre: "Cableado electrico",
    precio: 22,
    stock: 17,
    imagen: require("../productos/image/9.png"),
  },
];

const Productos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.id.toString().includes(busqueda)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    {showScrollButton ? (
      <button
        className={`${styles['fixed']} ${styles['bottom-0']} ${styles['left-0']} ${styles['mb-4']} ${styles['ml-4']} ${styles['bg-blue-500']} ${styles['text-white']} ${styles['p-2']} ${styles['rounded-full']} ${styles['hover:bg-blue-700']} ${styles['focus:outline-none']} ${styles['focus:ring']} ${styles['focus:ring-blue-500']} ${styles['focus:ring-opacity-50']}`}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        style={{ display: 'block' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={`${styles['h-6']} ${styles['w-6']}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.293 10.293a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    ) : null}
    <div className="search-container">
      <div className="amazon-search" style={{width: "50%"}}>
        <input
          type="text"
          placeholder="Buscar productos"
          value={busqueda}
          onChange={handleBusqueda}
          style={{width: "100%"}}
        />
      </div>
    </div>
    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {productosFiltrados.map((product) => (
        <li key={product.id}>
          <Link href={`/productos/${product.id}`} legacyBehavior> 
            <a>
              <div className="group">
              <div className={`${styles['relative']} ${styles['overflow-hidden']} ${styles['rounded-lg']} ${styles['shadow-lg']} group-hover:shadow-xl transition-shadow duration-500`} style={{width: '100%', height: '100%'}}>
                  <Image src={product.imagen} alt={product.nombre} layout="responsive" width={300} height={300} />
                </div>
                <div className={`${styles['p-4']}`}>
                  <h2 className={`${styles['font-semibold']} ${styles['text-gray-800']} ${styles['text-lg']}`} style={{ textAlign: "center" }}>{product.nombre}</h2>
                  <p className={`${styles['text-gray-600']} ${styles['mt-2']}`} style={{ textAlign: "center" }}>Precio: ${product.precio}</p>
                  <p className={`${styles['text-gray-600']} ${styles['mt-2']}`} style={{ textAlign: "center" }}> Disponibilidad: {product.stock} en stock</p>
                </div>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
};


export default Productos;