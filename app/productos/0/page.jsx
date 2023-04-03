import Image from 'next/image';
import Imagen0 from '../../images/0.png';
import Link from 'next/link';

const Cero = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Cerrojo para puerta</h1>
      <div className="mx-auto">
        <Image src={Imagen0} alt="Imagen del Producto" width={500} height={64} className="object-contain mb-4" />
      </div>
      <p className="text-base text-gray-500">El cerrojo para puerta es una excelente opción para aquellos que buscan aumentar la seguridad de su hogar. Con su diseño resistente y duradero, este cerrojo garantiza que tu puerta estará bien protegida. Además, su instalación es rápida y sencilla, lo que te permitirá disfrutar de la tranquilidad y seguridad que necesitas en muy poco tiempo. No esperes más y adquiere tu cerrojo para puerta ahora mismo en Ferretería La Internacional.</p>
      <div className="text-left my-4">
        <h2 className="text-lg font-bold mb-2">Características:</h2>
        <ul className="list-disc pl-6">
          <li>Material: Acero inoxidable</li>
          <li>Cerradura de doble cilindro</li>
          <li>Incluye tornillos para su instalación</li>
          <li>Acabado cromado</li>
          <li>Dimensiones: 15 cm x 6 cm x 3 cm</li>
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

export default Cero;