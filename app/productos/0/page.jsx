import Image from 'next/image';
import Imagen0 from '../../images/0.png'

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
    </div>
  )
};

export default Cero;