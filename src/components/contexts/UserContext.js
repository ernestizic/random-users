import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const UserContext = createContext();
const UserContextProvider = (props) => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async ()=> {
            const res = await axios.get('https://randomuser.me/api/')
                //console.log(res.data.results)
                setUsers(res.data.results);
                setIsLoading(false)
        }
        fetchUsers();
    }, [])

    useEffect(() => {
        fetchMaleUsers();
        return () => {
            
        }
    }, [])


    //Male users
    const fetchMaleUsers =()=> {
        axios.get('https://randomuser.me/api/?gender=male')
            .then(res =>{
                //console.log(res.data) 
                setIsLoading(true);
                setUsers(res.data.results);
                setIsLoading(false);
                } 
            )
            .catch(error => {
                console.log(error);
                setIsLoading(true);
            });
    };


    return ( 
        <UserContext.Provider value={{users, isLoading, fetchMaleUsers}}>
            {props.children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;