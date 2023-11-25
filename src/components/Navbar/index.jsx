import { useState, useEffect } from "react";

const Navbar = ({onSearch}) => {

    const [search, setSearch] = useState('');

    useEffect(()=> {
        console.log('onSearch cambio');
    }, [onSearch]) ;

    useEffect(()=> {
        console.log('Componente listo');
    }, []) ;

    useEffect(()=> {
        console.log('search Cambio');
    }, [search]) ;



    const handleInputChange = (event) => {
        setSearch(event.target.value)
    };


    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(search);
        }
    };

    return (
        <div>
            <p>Mi boletera</p>
            <input 
            placeholder="busca tu evento favorito" 
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={search}
            />
        </div>
    );
};

export default Navbar;