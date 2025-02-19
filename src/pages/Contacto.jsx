import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <header className="relative w-full h-screen flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold text-gray-700 mb-4 tracking-wide">Contacto</h1>
          <p className="text-md text-gray-700 mb-6">¿Tienes alguna pregunta? ¡Contáctanos!</p>

          <div className="px-6 py-2 border-2 border-gray-700 text-gray-700 text-md hover:bg-gray-700 hover:text-white transition">
            <p>
              <a href="mailto:vomheim@gmail.com">vomheim@gmail.com</a>
            </p>
          </div>


        </div>
      </header>
    </div>
  );
}

export default Contact;
