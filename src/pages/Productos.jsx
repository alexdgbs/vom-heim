import React, { useState, useEffect } from 'react';

function Productos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [isVisible, setIsVisible] = useState(false); 

  const products = [
    {
      id: 1,
      name: "Loose Cargo Jeans",
      category: "cargo",
      description: "Jeans cargo en denim rígido de algodón, con corte holgado desde los glúteos hasta la bastilla.",
      price: "$749.00",
      image: "https://image.hm.com/assets/hm/ff/b1/ffb1e70f1aa72932b72413ab6fbc029f9743401a.jpg?imwidth=564"
    },
    {
      id: 2,
      name: "Baggy Jeans",
      category: "jeans",
      description: "Jeans estilo baggy para un look cómodo y moderno.",
      price: "$749.00",
      image: "https://image.hm.com/assets/hm/9e/53/9e53035efef96606bc4b50eaf6a0eee4f08a152c.jpg?imwidth=564"
    },
    {
      id: 3,
      name: "Baggy Jeans",
      category: "jeans",
      description: "Jeans estilo baggy en color oscuro para un look relajado.",
      price: "$749.00",
      image: "https://image.hm.com/assets/hm/e5/ad/e5ad15f27bca5ea4ff0df33d0c617be4901f7a8d.jpg?imwidth=564"
    },
    {
      id: 4,
      name: "Baggy Jeans",
      category: "jeans",
      description: "Jeans baggy con un toque moderno y un corte cómodo.",
      price: "$749.00",
      image: "https://image.hm.com/assets/hm/3e/ec/3eecfdb15fad13c51182236deb61a17578fa9f4d.jpg?imwidth=564"
    }
  ];

  const filteredProducts = selectedCategory === "todos"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const openModal = (product) => {
    setProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setProduct(null);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (modalOpen) {
    
      document.body.style.overflow = 'hidden';
    } else {

      document.body.style.overflow = 'auto';
    }

    return () => {
   
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="max-w-screen-xl mx-auto px-4 pb-12">
        <header className="flex justify-left items-center py-4">
          {/* Botones de categorías */}
          <button
            onClick={() => setSelectedCategory("todos")}
            className={`mt-6 mb-6 px-6 py-1 border-2 border-gray-700 text-md hover:bg-gray-700 hover:text-white transition mr-4 ${selectedCategory === "todos" ? "bg-gray-700 text-white" : "text-gray-700"}`}
          >
            Todos
          </button>
          <button
            onClick={() => setSelectedCategory("jeans")}
            className={`mt-6 mb-6 px-6 py-1 border-2 border-gray-700 text-md hover:bg-gray-700 hover:text-white transition mr-4 ${selectedCategory === "jeans" ? "bg-gray-700 text-white" : "text-gray-700"}`}
          >
            Jeans
          </button>
          <button
            onClick={() => setSelectedCategory("cargo")}
            className={`mt-6 mb-6 px-6 py-1 border-2 border-gray-700 text-md hover:bg-gray-700 hover:text-white transition ${selectedCategory === "cargo" ? "bg-gray-700 text-white" : "text-gray-700"}`}
          >
            Cargo
          </button>
        </header>

        <section className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="text-left bg-white overflow-hidden shadow-lg relative transform transition duration-600 hover:scale-101 hover:shadow-xl">
              <img className="w-full h-auto object-cover" src={product.image} alt={product.name} />
              <div className="p-4">
                <p className="text-sm font-bold text-gray-800">{product.name}</p>
                <p className="font-bold text-xs text-sky-800">{product.price}</p>
                <div className="flex justify-left mt-4">
                  <button
                    onClick={() => openModal(product)}
                    className="text-gray-400 font-semibold hover:underline text-sm"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {modalOpen && product && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 z-50">
            <div className="bg-white shadow-lg p-4 w-full max-w-3xl mx-4 md:mx-8 lg:w-3/4 flex flex-col md:flex-row transform transition-all duration-300 scale-100 md:scale-95">
              <div className="w-full h-auto mb-6 md:mb-0 md:w-1/2">
                <img className="w-full h-full object-cover" src={product.image} alt={product.name} />
              </div>

              <div className="w-full pl-0 md:pl-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-800 text-3xl">×</button>
                </div>
                <p className="mt-4 text-sm text-gray-600">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-bold text-sky-800">{product.price}</span>
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
