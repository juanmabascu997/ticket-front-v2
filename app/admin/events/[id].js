import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EventDetail() {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (!session || session.user.role !== 'admin') {
    //   return;
    // }
    async function fetchEventDetails() {
      const res = await fetch(`/api/admin/events/${id}`);
      const data = await res.json();
      setEvent(data.event);
      setLoading(false);
    }
    if (id) fetchEventDetails();
  }, [session, id]);

//   if (!session || session.user.role !== 'admin') {
//     return <p>Acceso denegado. Solo los administradores pueden ver esta página.</p>;
//   }

  if (loading) return <p>Cargando detalles...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Detalles de {event.name}</h1>
      <p>Recaudación: ${event.revenue}</p>
      <p>Inscriptos: {event.attendees.length}</p>
      <h2 className="text-xl font-semibold mt-4">Lista de Inscriptos</h2>
      <ul className="list-disc pl-6">
        {event.attendees.map((attendee, index) => (
          <li key={index}>{attendee.name} - {attendee.email}</li>
        ))}
      </ul>
    </div>
  );
}
