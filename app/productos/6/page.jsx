import Image from 'next/image';
import Imagen6 from '../../images/6.png'
import Link from 'next/link';

const Sexto = () => {
    return(
        <div className="text-center flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Interruptor eléctrico</h1>
            <div className="mx-auto">
                <Image src={Imagen6} alt="Imagen del Producto" width={500} height={64} className="object-contain mb-4" />
            </div>
            <p className="text-base text-gray-500">El interruptor eléctrico es un dispositivo esencial en cualquier hogar o edificio que permite controlar la corriente eléctrica que llega a los diferentes puntos de luz y enchufes. Este interruptor eléctrico está diseñado para proporcionar una alta calidad en su construcción, con materiales resistentes y duraderos que aseguran su buen funcionamiento a largo plazo. Además, su instalación es sencilla y segura, lo que lo hace una excelente opción para cualquier proyecto de construcción o renovación. 
            </p>
            <div className="text-left mt-4">
                <h2 className="text-lg font-bold mb-2">Características del Producto:</h2>
                <ul className="list-disc list-inside">
                    <li>Interruptor eléctrico de alta calidad</li>
                    <li>Diseñado para proporcionar un control seguro y efectivo de la electricidad</li>
                    <li>Fácil instalación y duradero</li>
                    <li>Ideal para proyectos de construcción y renovación</li>
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
    )
};

export default Sexto;
