import Image from 'next/image';
import Imagen8 from '../../images/8.png';

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
    </div>
  );
};

export default Octavo;
