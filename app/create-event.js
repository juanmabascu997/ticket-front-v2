import BackButton from '@/components/BackButton';
import { useState } from 'react';

export default function CreateEvent() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    location: '',
    maxAttendees: '',
    categories: '',
    images: [],
    paymentMethods: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setForm({ ...form, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar y enviar datos a la API para crear el evento
    try {
      const res = await fetch('/api/events/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert('Evento creado exitosamente');
      } else {
        alert('Hubo un error al crear el evento');
      }
    } catch (error) {
      console.error('Error al crear el evento:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
        <BackButton label="Atrás" className="mb-4" />
      <h1 className="text-2xl font-bold mb-6">Crear Nuevo Evento</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold">Nombre del Evento</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Fecha y Hora de Inicio</label>
          <input
            type="datetime-local"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Lugar del Evento</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Cantidad Máxima de Inscriptos</label>
          <input
            type="number"
            name="maxAttendees"
            value={form.maxAttendees}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Categorías por Edad (e.g., Infantil, Juvenil, Adulto)</label>
          <input
            type="text"
            name="categories"
            value={form.categories}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Imágenes de Eventos Anteriores</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Métodos de Pago (e.g., Efectivo, Tarjeta, Mercado Pago)</label>
          <input
            type="text"
            name="paymentMethods"
            value={form.paymentMethods}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Información de Contacto (e.g., Teléfono, Email)</label>
          <input
            type="text"
            name="contactInfo"
            value={form.contactInfo}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Crear Evento
        </button>
      </form>
    </div>
  );
}
