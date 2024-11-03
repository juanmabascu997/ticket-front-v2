export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-white">EventosApp</h2>
              <p className="mt-2">La mejor plataforma para tus eventos.</p>
              <p>Contacto: info@eventosapp.com</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://facebook.com" target="_blank" className="hover:text-white">Facebook</a>
              <a href="https://twitter.com" target="_blank" className="hover:text-white">Twitter</a>
              <a href="https://instagram.com" target="_blank" className="hover:text-white">Instagram</a>
            </div>
          </div>
          <div className="text-center text-sm mt-4">
            © {new Date().getFullYear()} EventosApp. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    );
  }
  