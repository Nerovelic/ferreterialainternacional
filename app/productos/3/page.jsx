import Image from 'next/image';
import Imagen3 from '../../images/3.png'
import Link from 'next/link';

const Tres = () => {
return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Placa para conexión de teléfono</h1>
        <div className="mx-auto">
          <Image src={Imagen3} alt="Imagen del Producto" width={500} height={64} className="object-contain mb-4" />
          </div>
            <p className="text-base text-gray-500">La placa para conexión de teléfono es un dispositivo esencial para cualquier hogar u oficina que busque tener una línea telefónica disponible en varias habitaciones. Con esta placa, podrás conectar tus cables telefónicos y distribuir la señal a través de múltiples salidas, asegurando que todos los rincones estén cubiertos. Además, cuenta con las siguientes características:</p>
            <div className="text-left my-4">
              <h2 className="text-lg font-bold mb-2">Características:</h2>
                <ul className="list-disc pl-6">
                  <li>Fácil instalación</li>
                  <li>Diseño compacto y resistente</li>
                  <li>Múltiples salidas para conectar varios teléfonos</li>
                  <li>Permite la distribución de señal de manera eficiente y sin pérdidas</li>
                  <li>Compatible con la mayoría de los cables telefónicos</li>
                </ul>
            </div>
           <p className="text-base text-gray-500">¡No te quedes sin la conectividad telefónica que necesitas con nuestra placa para conexión de teléfono!</p>
      <div className="fixed bottom-4 left-4">
          <Link href="/productos" legacyBehavior>
            <a className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
        </Link>
      </div>           
    </div>
  )
};

export default Tres;