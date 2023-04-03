import Image from 'next/image';
import Imagen1 from '../../images/1.png'

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
    </div>
  )
};

export default Uno;