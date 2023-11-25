import { useEffect, useState} from 'react';

import eventsJSON from '../data/events.json'

const useEventData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        setTimeout(() => {
            try {
            setData(eventsJSON);
            setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 4000);
        //load API Call
    }, []);


    console.log(data);

    return {
        events: data?._embedded?.events || [],
        isLoading,
        error,
    };
};

export default useEventData;