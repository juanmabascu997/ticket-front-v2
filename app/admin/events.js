import BackButton from '@/components/BackButton';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AdminEvents() {
  const { data: session } = useSession();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (!session || session.user.role !== 'admin') {
    //   return;
    // }
    async function fetchEvents() {
      const res = await fetch('/api/admin/events'); 
      const data = await res.json();
      setEvents(data.events);
      setLoading(false);
    }
    fetchEvents();
  }, [session]);

//   if (!session || session.user.role !== 'admin') {
//     return <p>Acceso denegado. Solo los administradores pueden ver esta página.</p>;
//   }

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="container mx-auto p-6">
        <BackButton label="Atrás" className="mb-4" />
      <h1 className="text-2xl font-bold mb-6">Mis Eventos</h1>
      {events.map((event) => (
        <div key={event.id} className="border p-4 mb-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">{event.name}</h2>
          <p>Recaudación: ${event.revenue}</p>
          <p>Inscriptos: {event.attendeesCount}</p>
          <Link href={`/admin/events/${event.id}`} className="text-blue-500 hover:underline">
            Ver detalle de inscriptos
          </Link>
        </div>
      ))}
    </div>
  );
}
