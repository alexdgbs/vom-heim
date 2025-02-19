import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Productos from './pages/Productos'; 
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-white">  
                <header
                  className="relative w-full h-screen flex flex-col justify-center items-center text-center"
                  style={{
                    backgroundColor: "#ffffff",  
                    backgroundImage: "none",    
                  }}
                >
                  <div className="absolute inset-0 bg-transparent"></div> 
                  <div className="relative z-10">
                    <h1 className="text-6xl font-extrabold text-gray-700 mb-4 tracking-wide">Vom Heim</h1>
                    <p className="text-md text-gray-700">La tienda de muebles que tu hogar necesita</p>
                    <Link to="/productos">
                      <button className="mt-6 px-6 py-2 border-2 border-gray-700 text-gray-700 text-md hover:bg-gray-700 hover:text-white transition">
                        Explorar colección
                      </button>
                    </Link>
                  </div>
                </header>
              </div>
            }
          />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
