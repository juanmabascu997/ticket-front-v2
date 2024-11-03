import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/hoc';

const events = [
  {
    id: 1,
    title: 'Evento de Música',
    description: 'Disfruta de un concierto inolvidable',
    image: 'https://www.sanluisrun.com.ar/wp-content/uploads/2022/06/285557901_143363378275626_3451845811215161109_n-1210x642.jpg',
  },
  {
    id: 2,
    title: 'Festival de Comida',
    description: 'Los mejores sabores en un solo lugar',
    image: 'https://www.sanluisrun.com.ar/wp-content/uploads/2023/04/341106666_969261977577150_7596124461806092421_n-1193x642.jpg',
  },
  {
    id: 3,
    title: 'Conferencia de Tecnología',
    description: 'Explora las últimas innovaciones',
    image: 'https://www.sanluisrun.com.ar/wp-content/uploads/2023/06/351313893_1120256085597023_4138542986055953032_n-1210x642.jpg',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia automáticamente la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval); // Limpia el intervalo cuando se desmonta el componente
  }, []);

  // Funciones para navegación manual
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % events.length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + events.length) % events.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={index === currentIndex ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${index === currentIndex ? 'block' : 'hidden'}`}
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 bg-black bg-opacity-50 w-full text-white text-center">
            <h3 className="text-2xl font-semibold">{event.title}</h3>
            <p className="text-md">{event.description}</p>
          </div>
        </motion.div>
      ))}

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full"
      >
        &gt;
      </button>
    </div>
  );
}

export default SectionWrapper(Carousel, "carousel");
