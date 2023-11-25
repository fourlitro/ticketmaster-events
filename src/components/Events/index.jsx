import useEventData from "../../hooks/useEventData";
import EventItem from "./components/EventItem/Index";

//creamos una constante para acceder a la data
//const events = data._embedded.events;

const Events = ({ searchTerm }) => {
  const { events, isLoading, error } = useEventData();

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

  if (error){
    return <div>Ha ocurrido un error</div>
  }

  if (isLoading){
    return <div>Cargando resultados...</div>
  }

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
