import { useState } from 'react';

import EventItem from "./components/EventItem/Index";
import eventsJSON from "../../data/events.json";

//creamos una constante para acceder a la data 
//const events = data._embedded.events; 


const Events = () => {
    const [data] = useState(eventsJSON);
    const { _embedded: { events } } = data;

    const handleEventItemClick = (id) => {
        console.log("evento clickeado: ", id)
    }

    const eventsComponent = events.map((eventItem) => (
        <EventItem 
            key={`event-item-${eventItem.id}`} 
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url} 
            onEventClick={handleEventItemClick}
            id={eventItem.id}
        />
    ));

    return (
        <div>
            Eventos
            {eventsComponent}
        </div>
    );
};

export default Events