import React from 'react';

const EventCard = ({ event }) => (
  <div className="p-4 border rounded shadow">
    <h2 className="text-xl font-bold">{event.eventName}</h2>
    <p>{new Date(event.date).toLocaleDateString()}</p>
    <p>{event.location}</p>
  </div>
);

export default EventCard;
