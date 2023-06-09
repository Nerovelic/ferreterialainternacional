'use client'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Email.module.css';
import styless from '../styles/Titulo.module.css';
import stylesss from '../styles/MapGoogle.module.css'

const Contacts = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${styless['titulo']}`}>
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Contactanos
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ponerse en contacto
          </p>
          <p className={`mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto ${styles['contenido']}`}>
            ¿Tiene alguna pregunta o simplemente quiere decir hola? Nos encantaría saber de usted. Envíanos un mensaje y te responderé lo antes posible.
          </p>
        </div>

        <div className="mt-10">
          <dl className="sm:grid sm:grid-cols-2 sm:gap-8">
          <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 h-10 w-10" />
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Dirección
              </dt>
              <dd className="ml-4 text-base text-gray-500">
                Reforma 293,
                Independencia
                Ensenada, B.C, 22840 
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-3 h-10 w-10" />
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Telefono Local
              </dt>
              <dd className="ml-4 text-base text-gray-500">
                (646) 176-2650
              </dd>
            </div>
            <div className={`${styles['email-section']}`}>
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 h-10 w-10" />
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Primer Correo
                </dt>
                <dd className="ml-4 text-base text-gray-500">
                  <a href="mailto:ferreterialainternacionalsa@gmail.com" className="ml-2 text-base text-blue-600 underline">ferreterialainternacionalsa@gmail.com</a>
                </dd>
            </div>
            <div className="mt-8 sm:mt-0 flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-3 h-10 w-10" />
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Telefono Internacional
              </dt>
              <dd className="ml-4 text-base text-gray-500">
                01152-646-176-26-50
              </dd>
            </div>
            <div className={`${styles['email-section']}`}>
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 h-10 w-10" />
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Segundo Correo
                </dt>
                <dd className="ml-4 text-base text-gray-500">
                  <a href="mailto:ferreteria_lainternacional@hotmail.com" className="ml-2 text-base text-blue-600 underline">ferreteria_lainternacional@hotmail.com</a>
                </dd>
            </div>
          </dl>
          <div className={`${stylesss['google-map']}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13554.474772151412!2d-116.6068819!3d31.8625898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88d7b14539aa1%3A0x5c1d5156b7a4869!2sFerreter%C3%ADa%20y%20Maderer%C3%ADa%20la%20Internacional!5e0!3m2!1ses-419!2smx!4v1680478363577!5m2!1ses-419!2smx"
                width={width > 768 ? 1216 : 400}
                height={width > 768 ? 450 : 300}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;