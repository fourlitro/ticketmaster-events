import { useEffect, useRef, useState } from 'react';

import Navbar from '../../components/Navbar';
import Events from '../../components/Events';

import useEventData from "../../hooks/useEventData";

const Home = () => {
  const { events, isLoading, error, fetchEvent} = useEventData();
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  useEffect(() =>{
    fetchEvent();
  }, []);

  const handleNavbarSearch = (term) => {
    console.log(containerRef.current.setSearch(""));
    setSearchTerm(term);
    fetchEvent(`&keyboard=${term}`);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {isLoading ?  <div>Cargando resultados...</div> : <Events searchTerm={searchTerm} events={events} /> }
      {!!error && <div>Ha ocurrido un error</div> }
    </>
  );
};

export default Home;
