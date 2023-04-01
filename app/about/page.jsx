import {Merriweather_Sans} from '@next/font/google'

const merriweather_sans = Merriweather_Sans(
    {
        subsets: ['latin'],
        variable: '--font-merriweather_sans',
        weight: ['400'],
        style: ['normal']
    }
)

const About = () => {
  return (
    <div className={`${merriweather_sans.className} text-justify text-base bg-gradient-to-r from-cyan-500 to-blue-500`}>
        <div>
            <h1 className='text-center text-lg text-indigo-600'>
                FERRETERIA LA INTERNACIONAL
            </h1>
        </div>
      <p style={{marginBottom: '1rem'}}>
        Nace en la ciudad de Ensenada Baja California Mexico un 16 de septiembre de 1967. Fundada por don Gilberto Madrigal Magdaleno, un hombre visionario que ha su corta edad y proveniente de la ciudad de Purepero Michoacán llega a la ciudad de Ensenada buscando provar suerte y fincar raíces. Al llegar a la ciudad se desempeña en el ramo de la construcción y ve la oportunidad de formar un negocio de ferretería ya que se le facilitaba por su conocimiento de construcción. En aquellos años eran pocas las ferreterías en la zona, pero bien formadas. Eso no le impidió seguir con su sueño y así muchas de esas ferreterías con el paso de los años se fueron acabando muchas por malos manejos, otras por fallecimiento de los propietarios y al desinterés de familiares que no quisieron seguir con los negocios. La Internacional Ferretería actualmente es una de las ferreterías más emblemáticas de la ciudad y más antigua. Actualmente es manejada por la tercera generación y esperemos que así siga, que vengan más logros y más años.
      </p>
      <p style={{marginBottom: '1rem'}}>
        En ferretería La Internacional actualmente contamos con las mejores marcas y precios de el mercado. Así como el más extenso surtido en la zona. Distribuidores autorizados de todas las marcas que comercializamos. Con compras directas de fábrica para así poder ofrecer el mejor precio a nuestros clientes. Trayendo a nuestra ciudad productos que satisfagan las necesidades de nuestra clientela. Actualmente es manejada por la tercera generación y esperemos que así siga, que vengan más logros y más años. En ferretería La Internacional actualmente contamos con las mejores marcas y precios de el mercado. Así como el más extenso surtido en la zona. Distribuidores autorizados de todas las marcas que comercializamos. Con compras directas de fábrica para así poder ofrecer el mejor precio a nuestros clientes. Trayendo a nuestra ciudad productos que satisfagan las necesidades de nuestra clientela.
      </p>
      <p>
        Marcamos la diferencia en atención y experiencia.
      </p>
    </div>
  );
};

export default About;