import React from 'react';
import EventForm from '../../components/EventForm';
import axios from 'axios';
import { useRouter } from 'next/router';

const CreateEvent = () => {
  const router = useRouter();

  const handleCreateEvent = async (eventData) => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/events`, eventData);
    router.push('/events');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Crear Nuevo Evento</h1>
      <EventForm onSubmit={handleCreateEvent} />
    </div>
  );
};

export default CreateEvent;
