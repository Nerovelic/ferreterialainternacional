import Image from 'next/image';
import Imagen7 from '../../images/7.png'

const Septimo = () => {
  return(
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Enchufe de electricidad</h1>
      <div className="mx-auto">
        <Image src={Imagen7} alt="Imagen del Producto" width={500} height={64} className="object-contain mb-4" />
      </div>
      <p className="text-base text-gray-500">
        ¡Presentamos el enchufe de electricidad! Este enchufe es la solución perfecta para aquellos que necesitan una fuente confiable de energía eléctrica en sus hogares o lugares de trabajo. Con su diseño compacto y de alta calidad, este enchufe se puede usar en cualquier lugar, desde la sala de estar hasta el garaje. Ya sea que necesites enchufar un electrodoméstico o cargar tus dispositivos móviles, este enchufe es la opción ideal. ¡Compra el tuyo ahora y olvídate de los problemas de energía eléctrica!</p>
      <div className="text-left">
        <h2 className="text-xl font-medium mb-2">Características:</h2>
        <ul className="list-disc list-inside">
          <li>Enchufe de alta calidad y resistencia</li>
          <li>Diseño compacto y fácil de usar</li>
          <li>Compatible con la mayoría de los electrodomésticos y dispositivos electrónicos</li>
          <li>Material aislante de alta calidad para mayor seguridad</li>
          <li>Resistente al calor y al frío extremo</li>
        </ul>
      </div>
    </div>
  )
};

export default Septimo;
