import { useState } from "react";

import EventItem from "./components/EventItem/Index";
import eventsJSON from "../../data/events.json";

//creamos una constante para acceder a la data
//const events = data._embedded.events;

const Events = ({ searchTerm }) => {
  const [data] = useState(eventsJSON);
  const { _embedded: { events }, } = data;

  const handleEventItemClick = (id) => {
    console.log("evento clickeado: ", id);
  };

  const renderEvents = () => {
    let eventFiltered = events;

    if( searchTerm.length > 0) {
        eventFiltered = eventFiltered.filter((item) => item.name.toLowerCase().includes(searchTerm));
    }


    return eventFiltered.map((eventItem) => (
        <EventItem
          key={`event-item-${eventItem.id}`}
          name={eventItem.name}
          info={eventItem.info}
          image={eventItem.images[0].url}
          onEventClick={handleEventItemClick}
          id={eventItem.id}
        />
      ));
  };

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
