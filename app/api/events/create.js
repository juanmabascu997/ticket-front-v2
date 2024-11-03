import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

//   if (!session || session.user.role !== 'admin') {
//     return res.status(403).json({ message: 'Acceso denegado' });
//   }

  if (req.method === 'POST') {
    const { name, date, location, maxAttendees, categories, images, paymentMethods, contactInfo } = req.body;

    const newEvent = {
      id: Date.now(),
      name,
      date,
      location,
      maxAttendees,
      categories,
      images,
      paymentMethods,
      contactInfo,
    };

    return res.status(201).json({ message: 'Evento creado exitosamente', event: newEvent });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
