import Image from 'next/image';
import Imagen8 from '../../images/8.png';
import Link from 'next/link';

const Octavo = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Cableado eléctrico</h1>
      <div className="mx-auto">
        <Image src={Imagen8} alt="Imagen del Producto" width={500} height={64} className="object-contain mb-4" />
      </div>
      <p className="text-base text-gray-500">
        El cableado eléctrico es un componente esencial en cualquier instalación eléctrica. Con nuestro cableado eléctrico de alta calidad, puedes estar seguro de que tus proyectos eléctricos tendrán la seguridad y el rendimiento que necesitas. Nuestro cableado eléctrico está diseñado para resistir el desgaste y la exposición al medio ambiente, lo que lo hace ideal para proyectos tanto en interiores como en exteriores. Además, nuestro cableado eléctrico está disponible en diferentes grosores y longitudes para adaptarse a cualquier necesidad. ¡Confía en nosotros para obtener el mejor cableado eléctrico para tus proyectos!</p>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Características del producto</h2>
        <ul className="list-disc list-inside text-left">
          <li>Disponible en diferentes grosores y longitudes</li>
          <li>Diseñado para resistir el desgaste y la exposición al medio ambiente</li>
          <li>Alta calidad para garantizar seguridad y rendimiento en tus proyectos eléctricos</li>
          <li>Compatible con proyectos tanto en interiores como en exteriores</li>
        </ul>
      </div>
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

export default Octavo;
