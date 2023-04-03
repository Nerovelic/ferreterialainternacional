import Image from 'next/image';
import Imagen1 from '../../images/1.png';
import Link from 'next/link';

const Uno = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Cerradura master lock con llave</h1>
      <div className="mx-auto">
        <Image src={Imagen1} alt="Imagen del Producto" width={500} height={64} className="object-contain mb-4" />
      </div>
      <p className="text-base text-gray-500">La cerradura Master Lock con llave es una excelente opción para mantener tus pertenencias seguras. Con su diseño resistente y duradero, esta cerradura es perfecta para asegurar puertas, armarios y cajas fuertes. Con su llave única, tendrás la tranquilidad de saber que solo tú puedes acceder a lo que está dentro. Además, su instalación es fácil y rápida, por lo que no tendrás que preocuparte por complicados procesos de instalación. A continuación, te presentamos algunas de sus características:</p>
      <div className="text-left my-4">
        <h2 className="text-lg font-bold mb-2">Características:</h2>
        <ul className="list-disc pl-6">
          <li>Diseño resistente y duradero</li>
          <li>Llave única para mayor seguridad</li>
          <li>Fácil instalación</li>
          <li>Perfecta para asegurar puertas, armarios y cajas fuertes</li>
          <li>Dimensiones: 20 cm x 6 cm x 9 cm</li>
        </ul>
      </div>
      <p className="text-base text-gray-500">Asegura tus pertenencias con la cerradura Master Lock y mantén la tranquilidad de saber que están protegidas con una cerradura confiable y de alta calidad.</p>
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
  );
};

export default Uno;
