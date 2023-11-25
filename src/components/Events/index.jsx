import { useNavigate } from "react-router-dom";


import EventItem from "./components/EventItem/Index";

//creamos una constante para acceder a la data
//const events = data._embedded.events;

const Events = ({ searchTerm, events }) => {
  
  const navigate = useNavigate();



  const handleEventItemClick = (id) => {
    navigate(`/detail/${id}`);
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
