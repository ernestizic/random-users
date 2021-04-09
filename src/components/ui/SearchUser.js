import React from 'react';

const SearchUser = () => {
    return ( 
        <input 
            style={searchField}
            type="search"
            placeholder="Find a user" 
        />
     );
}


const searchField = {
    width: '100%',
    padding: '15px',
    marginTop: '20px'
}

export default SearchUser;