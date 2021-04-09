import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const UserContext = createContext();
const UserContextProvider = (props) => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser =()=> {
            axios.get('https://randomuser.me/api/?results=5')
                .then(res => {
                    console.log(res.data.results)
                    setUsers(res.data.results);
                    setIsLoading(false)
                })
                .catch(error => {
                    console.log(error);
                    setIsLoading(true);
                });
        }
        fetchUser();
    }, [])
    return ( 
        <UserContext.Provider value={{users, isLoading}}>
            {props.children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;