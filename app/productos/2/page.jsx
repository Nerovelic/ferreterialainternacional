import Image from 'next/image';
import Imagen2 from '../../images/2.png'

const Dos = () => {
return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Cerradura master lock</h1>
        <div className="mx-auto">
          <Image src={Imagen2} alt="Imagen del Producto" width={500} height={64} className="object-contain mb-4" />
          </div>
            <p className="text-base text-gray-500">La cerradura Master Lock es un dispositivo de seguridad de alta calidad para proteger tus pertenencias más valiosas. Esta cerradura está diseñada con un mecanismo resistente a la manipulación, lo que la convierte en una opción ideal para asegurar tu hogar, negocio o cualquier lugar donde necesites protección extra. Además, cuenta con las siguientes características:</p>
            <div className="text-left my-4">
              <h2 className="text-lg font-bold mb-2">Características:</h2>
                <ul className="list-disc pl-6">
                  <li>Mecanismo resistente a la manipulación</li>
                  <li>Cuerpo de acero sólido</li>
                  <li>Fácil de instalar y usa</li>
                  <li>Ideal para asegurar cualquier tipo de propiedad</li>
                  <li>Dimensiones: 20 cm x 6 cm x 9 cm</li>
                </ul>
            </div>
            <p className="text-base text-gray-500">Con su sólido cuerpo de acero y su mecanismo de cierre resistente, la cerradura Master Lock es la opción número uno para proteger tus bienes más preciados. ¡No esperes más para asegurar tus pertenencias con la cerradura Master Lock!</p>
    </div>
  )
};

export default Dos;