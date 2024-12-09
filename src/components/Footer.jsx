import React from 'react'
import logo from '../assets/images/logo-banco-azteca-letras.jpeg'

const Footer = () => {



  return (
    <footer className="bg-black text-white py-4 mt-auto w-full z-50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        
        <div className="flex items-center mb-4 bg-white p-3 rounded-lg sm:mb-0">
          
            <img
              src={logo} 
              alt="Logo de la Empresa"
              className="h-6   " 
            />
          
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-auto">
          <p className="text-center sm:text-left text-sm mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} Banco Azteca Todos los derechos reservados.
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <span to="/aviso-privacidad" className="text-sm mx-2 hover:underline">
              Aviso de Privacidad
            </span>
            <a href="mailto:contacto@tuempresa.com" className="text-sm mx-2 hover:underline">
              bancoazteca@axteca.com
            </a>
            <a href="tel:+1234567890" className="text-sm mx-2 hover:underline">
              +1 (52) 563-810-344
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer