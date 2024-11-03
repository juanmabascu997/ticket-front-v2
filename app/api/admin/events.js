import { getSession } from 'next-auth/react';

const events = [
  { id: '1', name: 'Concierto de Verano', revenue: 5000, attendeesCount: 100 },
  { id: '2', name: 'Festival de Comida', revenue: 3000, attendeesCount: 50 },
  { id: '4', name: 'Concierto de Verano', revenue: 5000, attendeesCount: 100 },
  { id: '3', name: 'Festival de Comida', revenue: 3000, attendeesCount: 50 },  { id: '45', name: 'Concierto de Verano', revenue: 5000, attendeesCount: 100 },
  { id: '55', name: 'Festival de Comida', revenue: 3000, attendeesCount: 50 },  { id: '456', name: 'Concierto de Verano', revenue: 5000, attendeesCount: 100 },
  { id: '66', name: 'Festival de Comida', revenue: 3000, attendeesCount: 50 },
];

export default async function handler(req, res) {
  const session = await getSession({ req });

//   if (!session || session.user.role !== 'admin') {
//     return res.status(403).json({ message: 'Acceso denegado' });
//   }

  res.status(200).json({ events });
}
