import Image from 'next/image';
import Imagen4 from '../../images/4.png'
import Link from 'next/link';

const Cuarto = () => {
    return(
        <div className="text-center flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Panel de electricidad</h1>
            <div className="mx-auto">
                <Image src={Imagen4} alt="Imagen del Producto" width={500} height={64} className="object-contain mb-4" />
            </div>
            <p className="text-base text-gray-500">El panel de electricidad es un elemento indispensable en cualquier hogar o edificio. Es el encargado de distribuir la energía eléctrica de manera segura y eficiente a todas las áreas y dispositivos que la requieren. Nuestro panel de electricidad está diseñado con los más altos estándares de calidad y seguridad, para garantizar un suministro eléctrico confiable y constante en todo momento. Además, su diseño compacto y moderno lo convierte en una opción ideal para cualquier tipo de construcción. ¡Haz de nuestro panel de electricidad la elección perfecta para tus proyectos eléctricos!</p>
            <div className="my-8">
                <h2 className="text-lg font-bold mb-4">Características del Producto:</h2>
                <ul className="list-disc list-inside text-left">
                    <li>Panel eléctrico para uso residencial o comercial.</li>
                    <li>Distribuye la energía eléctrica de manera segura y eficiente.</li>
                    <li>Diseño compacto y moderno.</li>
                    <li>Cumple con los estándares de calidad y seguridad.</li>
                    <li>Fácil instalación y mantenimiento.</li>
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

export default Cuarto;
