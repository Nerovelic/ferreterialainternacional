import Link from 'next/link';

const Productos = () => {
  return (
    <div>
      <ul className="bg-gradient-to-r from-cyan-500 to-blue-500">
          <>
            <li>
              <Link href="/cerrajeria">Cerrajería</Link>
            </li>
            <li>
              <Link href="/electricidad">Electricidad</Link>
            </li>
          </>
      </ul>
    </div>
  );
};

export default Productos;