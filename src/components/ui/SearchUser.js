
import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const SearchUser = () => {
    const {getQuery} = useContext(UserContext)
    const [searchWord, setSearchWord] = useState('');
    
    const handleSubmit =(e)=> {
        e.preventDefault();
        console.log('searchword',searchWord)
        getQuery(searchWord)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                style={searchField}
                type="search"
                placeholder="Find a user" 
                value={searchWord}
                onChange={(e)=> setSearchWord(e.target.value)}
            />
        </form>
     );
}


const searchField = {
    width: '100%',
    padding: '15px',
    marginTop: '20px',
    background: '#3C3F54',
    border: 0,
    borderRadius: '10px',
    color: '#FFFFFF'
}

export default SearchUser;