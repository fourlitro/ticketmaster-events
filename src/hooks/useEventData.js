import { useState } from "react";

const useEventData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchEvent = async (params) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=pIUcApoP7o6YwxEKYFtjHuM6I22UmSLM&countryCode=MX${
          params?.lenght ? params : ""
        }`
      );
      const data = await response.json();

      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  fetchEvent();

  console.log(data);

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
    fetchEvent,
  };
};

export default useEventData;
