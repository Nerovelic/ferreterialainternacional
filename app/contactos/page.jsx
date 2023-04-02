import React from "react";

const Contacts = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Contactanos
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ponerse en contacto
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            ¿Tiene alguna pregunta o simplemente quiere decir hola? Nos encantaría saber de usted. Envíanos un mensaje y te responderé lo antes posible.
          </p>
        </div>

        <div className="mt-10">
          <dl className="sm:grid sm:grid-cols-2 sm:gap-8">
            <div className="flex items-center">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Dirreccion
              </dt>
              <dd className="ml-4 text-base text-gray-500">
                Reforma 293,<br />
                Independencia<br />
                Ensenada, B.C, 22840 
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 flex items-center">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Telefono Local
              </dt>
              <dd className="ml-4 text-base text-gray-500">
                (646) 176-2650
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 flex items-center">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Primer Correo 
              </dt>
              <dd className="ml-4 text-base text-gray-500">
                ferreterialainternacionalsa@gmail.com
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 flex items-center">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Telefono Internacional
              </dt>
              <dd className="ml-4 text-base text-gray-500">
                01152-646-176-26-50
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 flex items-center">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Segundo Correo
              </dt>
              <dd className="ml-4 text-base text-gray-500">               	
                ferreteria_lainternacional@hotmail.com
              </dd>
            </div>
          </dl>
          <div className="mt-10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13554.474772151412!2d-116.6068819!3d31.8625898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88d7b14539aa1%3A0x5c1d5156b7a4869!2sFerreter%C3%ADa%20y%20Maderer%C3%ADa%20la%20Internacional!5e0!3m2!1ses-419!2smx!4v1680478363577!5m2!1ses-419!2smx" width="1216" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;