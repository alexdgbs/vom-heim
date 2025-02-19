import React, { useState } from 'react';

function Productos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Lámpara vintage",
      description: "Esta lámpara vintage tiene un diseño retro único, ideal para oficinas o espacios creativos. Con su base metálica y bombilla de estilo antiguo, ofrece un ambiente cálido y acogedor.",
      price: "$49.99",
      image: "https://casapajaros.com.mx/cdn/shop/products/Lamparaescritoriovintage_1024x.jpg?v=1600816440"
    },
    {
      id: 2,
      name: "Mueble de oficina",
      description: "Este mueble de oficina es perfecto para cualquier espacio de trabajo moderno. Hecho de materiales duraderos, ofrece suficiente espacio para almacenamiento y organización.",
      price: "$119.99",
      image: "https://img5.su-cdn.com/cdn-cgi/image/width=750,height=750/mall/file/2022/09/14/a711b99379a135742f68ef3263cff933.jpg"
    }
  ];

  const openModal = (product) => {
    setProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setProduct(null);
  };

  return (
    <div className="bg-white min-h-screen pt-10"> 
      <div className="max-w-screen-xl mx-auto px-4 pb-12">
        <section className="max-w-screen-xl mx-auto px-6 py-10">
          <h1 className="text-3xl py-10 text-sky-800 font-bold">Productos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg h-90 relative transform transition duration-500 hover:scale-102 hover:shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={products[0].image}
                alt={products[0].name}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-md font-semibold text-white">{products[0].name}</h3>
                <div className="flex justify-start mt-4">
                  <button
                    onClick={() => openModal(products[0])}
                    className="text-white hover:underline text-sm"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg h-90 relative transform transition duration-500 hover:scale-102 hover:shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={products[1].image}
                alt={products[1].name}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-md font-semibold text-white">{products[1].name}</h3>
                <div className="flex justify-start mt-4">
                  <button
                    onClick={() => openModal(products[1])}
                    className="text-white hover:underline text-sm"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {modalOpen && product && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-3xl mx-4 md:mx-8 lg:w-3/4 flex flex-col md:flex-row transform transition-all duration-300 scale-100 md:scale-95">
              <div className="w-full h-auto mb-6 md:mb-0 md:w-1/2">
                <img className="w-full h-full object-cover rounded-lg" src={product.image} alt={product.name} />
              </div>
              
              <div className="w-full pl-0 md:pl-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-800 text-3xl">×</button>
                </div>
                <p className="mt-4 text-sm text-gray-600">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-bold text-gray-600">{product.price}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Productos;
