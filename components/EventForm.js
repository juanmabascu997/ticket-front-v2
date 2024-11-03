import React, { useState } from 'react';
import Button from './Button';

const EventForm = ({ onSubmit }) => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ eventName, date, location });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nombre del Evento"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Ubicación"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <Button text="Crear Evento" />
    </form>
  );
};

export default EventForm;
