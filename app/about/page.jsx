import { Merriweather_Sans } from '@next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import local from '../images/local.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faShop } from '@fortawesome/free-solid-svg-icons';

const merriweather_sans = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--font-merriweather_sans',
  weight: ['400'],
  style: ['normal']
});

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Acerca de Ferretería La Internacional
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4 text-justify">
              Ferretería La Internacional nació en la ciudad de Ensenada Baja California, México, en 1967. Fundada por don Gilberto Madrigal Magdaleno, es una de las ferreterías más emblemáticas de la ciudad y una de las más antiguas. Actualmente es manejada por la tercera generación.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-0 lg:grid-cols-2">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
                  <FontAwesomeIcon icon={faShop} className="h-6 w-6" /> 
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  ¿Qué es Ferretería La Internacional?
                </h3>
                <p className="mt-2 text-base text-gray-500 text-justify">
                  Somos una ferretería que cuenta con las mejores marcas y precios del mercado,además de un excelente servicio al cliente. En Ferretería La Internacional encontrarás todo lo que necesitas para tus proyectos de construcción, mantenimiento y reparación del hogar, desde herramientas y materiales de construcción hasta pinturas y artículos de jardinería.
                </p>
              </div>
            </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
                    <FontAwesomeIcon icon={faUsers} className="h-6 w-6" />
                  </div>
                </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Nuestra misión
                </h3>
                <p className="mt-2 text-base text-gray-500 text-justify">
                  En Ferretería La Internacional nos comprometemos a ofrecer productos y servicios de alta calidad a precios competitivos, y a brindar una atención al cliente excepcional. Queremos ser la opción preferida de nuestros clientes en el mercado de la construcción y el hogar.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image src={local} alt="Local de Ferretería La Internacional" width={10000} height={355} className="mx-auto mt-8" />
      </div>
      <footer
        style={{
          backgroundColor: "#333333",
          color: "#ffffff",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p>FERRETERIA Y MADERERIA LA INTERNACIONAL. ENSENADA B.C. Tel.(646)176-26-50 CR. 2018 -2019</p>
      </footer>
    </div>
  );
};

export default About;