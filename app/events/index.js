import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../../components/EventCard';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
    //   const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events`);

      setEvents([
        {
            _id: 1,
            date: new Date(),
            location: "Pepe",
            eventName: "Natacion"
        },
        {
            _id: 66,
            date: new Date(),
            location: "Pepe1",
            eventName: "Natacion2"
        },{
            _id: 3,
            date: new Date(),
            location: "sggg",
            eventName: "Natacion2"
        },{
            _id: 234,
            date: new Date(),
            location: "asdasd",
            eventName: "Natacion3"
        },{
            _id: 34,
            date: new Date(),
            location: "ccc",
            eventName: "Natacion3"
        },{
            _id: 434,
            date: new Date(),
            location: "Pepe",
            eventName: "Natacion"
        }
      ]);
    };
    fetchEvents();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Eventos</h1>
      <div className="space-y-4">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
