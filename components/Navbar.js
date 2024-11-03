import { SectionWrapper } from '@/hoc';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">
          <Link href="/" legacyBehavior>
            <a className="hover:text-gray-300 transition">EventosApp</a>
          </Link>
        </div>
        <div className="space-x-6 flex">
          <Link href="/register" legacyBehavior>
            <a className="hover:text-gray-400 transition">Registrarse</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-gray-400 transition">Contacto</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-gray-400 transition">Acerca de</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SectionWrapper(Navbar, "navbar");
