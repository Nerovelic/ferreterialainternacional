import Image from 'next/image';
import Imagen5 from '../../images/5.png'

const Cinco = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">T-king - Probador inalámbrico de conexión de tuberías</h1>
      <div className="mx-auto">
        <Image src={Imagen5} alt="Imagen del Producto" width={500} height={64} className="object-contain mb-4" />
      </div>
      <p className="text-base text-gray-500">
        El probador inalámbrico de conexión de tuberías T-king es la herramienta perfecta para aquellos que necesitan realizar pruebas de fugas en tuberías de manera eficiente y precisa. Con este dispositivo, podrás detectar fácilmente cualquier fuga en tus tuberías, sin necesidad de realizar cortes o dañar la estructura de tus instalaciones. Además, su diseño inalámbrico te permite realizar pruebas en áreas de difícil acceso, sin necesidad de cables ni conexiones adicionales.
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Características del producto:</h2>
        <ul className="list-disc list-inside text-gray-500">
          <li>Fácil de usar</li>
          <li>Diseño inalámbrico</li>
          <li>Detecta fugas de manera eficiente y precisa</li>
          <li>No requiere cortes ni daña la estructura de las tuberías</li>
          <li>Permite realizar pruebas en áreas de difícil acceso</li>
          <li>Ahorra tiempo y dinero</li>
        </ul>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Información del producto:</h2>
          <ul className="list-disc list-inside text-gray-500">
            <li>Marca: T-king</li>
            <li>Modelo: Probador inalámbrico de conexión de tuberías</li>
            <li>Dimensiones: 20cm x 10cm x 5cm</li>
            <li>Peso: 500g</li>
            <li>Batería: 1x AAA (no incluida)</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Cinco;
