import { getSession } from 'next-auth/react';

// Simulación de datos del evento con inscriptos
const events = {
  '1': {
    id: '1',
    name: 'Concierto de Verano',
    revenue: 5000,
    attendees: [
      { name: 'Juan Pérez', email: 'juan@example.com' },
      { name: 'María López', email: 'maria@example.com' },
    ],
  },
  '2': {
    id: '2',
    name: 'Festival de Comida',
    revenue: 3000,
    attendees: [
      { name: 'Carlos Gómez', email: 'carlos@example.com' },
      { name: 'Ana Torres', email: 'ana@example.com' },
    ],
  },
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { id } = req.query;

  // if (!session || session.user.role !== 'admin') {
  //   return res.status(403).json({ message: 'Acceso denegado' });
  // }

  const event = events[id];
  if (!event) {
    return res.status(404).json({ message: 'Evento no encontrado' });
  }

  res.status(200).json({ event });
}
